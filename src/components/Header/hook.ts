import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../app/store";
import authSlice from "../../context/auth/slice";
import { productInCartSelector } from "../../context/cart/selector";
import { SearchOptions } from "./types";
import { getSearchProduct } from "../../context/product/services";
import { useDebounce } from "../../utilities/hooks";
import { ROUTES } from "../../constants/routes";

export type ReceivedProps = Record<string, any>;

const useHeader = (props: ReceivedProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showDropdownButtonAccount, setShowDropdownButtonAccount] =
    useState<boolean>(false);
  const totalProductInCart = useSelector(productInCartSelector).length;
  const [searchOptions, setSearchOptions] = useState<SearchOptions[]>([]);
  const [selectedOption, setSelectedOption] = useState<SearchOptions>();
  const [keywordSearch, setKeywordSearch] = useState<string | null>(null);

  const valueDebounce = useDebounce(keywordSearch, 600);

  type FormInputs = {
    keyword: string | null;
  };

  const { handleSubmit, control, setValue } = useForm<FormInputs>({
    mode: "onSubmit",
    defaultValues: {
      keyword: null,
    },
  });
  useEffect(() => {
    if (valueDebounce) {
      getSearchProduct(valueDebounce).then((res) => {
        if (res.status === 200) {
          const products = res.data.map((product) => {
            return { value: product.name, label: product.name };
          });
          setSearchOptions((pre) => [...pre, ...products]);
        }
      });
    }
  }, [valueDebounce]);

  const onChangeSearchInput = (value: string) => {
    if (value) {
      const optionAvailable = searchOptions.find((option) => {
        return value === option.value;
      });
      if (!optionAvailable) {
        setSearchOptions((pre) => [...pre, { value, label: value }]);
        setSelectedOption({ value, label: value });
      }
      setKeywordSearch(value);
    }
    setValue("keyword", value);
  };

  const onSubmit = (data: any) => {
    navigate({
      pathname: ROUTES.SEARCH,
      search: `?${createSearchParams({
        keyword: data.keyword,
      })}`,
    });
  };
  const logout = async () => {
    dispatch(authSlice.actions.logout());
    localStorage.removeItem("token");
  };
  return {
    ...props,
    totalProductInCart,
    showDropdownButtonAccount,
    setShowDropdownButtonAccount,
    logout,
    navigate,
    handleSubmit,
    onSubmit,
    control,
    searchOptions,
    onChangeSearchInput,
    selectedOption,
    setSelectedOption,
    setValue,
  };
};

export type Props = ReturnType<typeof useHeader>;
export default useHeader;
