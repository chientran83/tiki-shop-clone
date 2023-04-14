import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { login } from "../../context/auth/services";
import { useAppDispatch } from "../../app/store";
import authSlice from "../../context/auth/slice";
import { loginSchema } from "./schema";

export type ReceivedProps = Record<string, any>;
const useLogin = (props: ReceivedProps) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  type FormInputs = {
    email: string;
    password: string;
    fetchApi: null;
  };

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "pistol",
      fetchApi: null,
    },
    resolver: yupResolver(loginSchema),
  });
  const handleClearErrorFetchApi = () => {
    clearErrors("fetchApi");
  };

  const onSubmit = (data: any) => {
    const { fetchApi, ...rest } = data;
    setLoading(true);
    login(rest)
      .then((res) => {
        if (res.status === 200) {
          // because api doesn't return login user data so i will fake data ^^
          localStorage.setItem("token", res.data.token);
          dispatch(
            authSlice.actions.login({
              ...res.data,
              user: {
                id: "2",
                email: "janet.weaver@reqres.in",
                avatar: "https://reqres.in/img/faces/2-image.jpg",
                name: "Chien Tran",
                dateOfBirt: "08/03/2001",
                gender: "nam",
                address: "Phuong Nam - Uong Bi - Quang Ninh",
              },
            })
          );
        }
        setLoading(false);
      })
      .catch(() => {
        setError("fetchApi", {
          type: "custom",
          message: "Tài khoản hoặc mật khẩu không đúng",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    ...props,
    showPass,
    setShowPass,
    register,
    handleSubmit,
    onSubmit,
    errors,
    handleClearErrorFetchApi,
    loading,
  };
};
export type Props = ReturnType<typeof useLogin>;
export default useLogin;
