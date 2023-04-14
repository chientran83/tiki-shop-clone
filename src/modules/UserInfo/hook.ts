import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs, { type Dayjs } from "dayjs";
import { message } from "antd";

import { userSelector } from "../../context/auth/selector";
import { userSchema } from "./schema";
import { updateUser } from "../../context/auth/services";
import { useAppDispatch } from "../../app/store";
import authSlice from "../../context/auth/slice";

export type ReceivedProps = Record<string, any>;
const useUserInfo = (props: ReceivedProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  let user = useSelector(userSelector);
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  type FormInputs = {
    email?: null | string;
    name?: null | string;
    gender?: string | undefined;
    address?: null | string;
    phoneNumber?: null | string;
    dateOfBirt?: undefined | Dayjs;
  };
  const initialForm = {
    email: null,
    name: null,
    gender: undefined,
    address: null,
    phoneNumber: null,
    dateOfBirt: undefined,
  };
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    defaultValues: initialForm,
    resolver: yupResolver(userSchema),
  });

  useEffect(() => {
    user && reset({ ...user, dateOfBirt: dayjs(user.dateOfBirt) });
  }, [user]);
  const onSubmit = (data: any) => {
    setLoading(true);
    updateUser(data)
      .then((data) => {
        if (data.status === 200) {
          dispatch(authSlice.actions.update(data.data));
          messageApi.open({
            type: "success",
            content: "Thay đổi thông tin thành công",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    ...props,
    loading,
    user,
    register,
    handleSubmit,
    control,
    onSubmit,
    contextHolder,
    errors,
  };
};

export type Props = ReturnType<typeof useUserInfo>;
export default useUserInfo;
