import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch } from "../../app/store";
import { registerAsyncThunk } from "../../context/auth/slice";
import { loginSchema } from "./schema";

export type ReceivedProps = Record<string, any>;
const useRegister = (props: ReceivedProps) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  type FormInputs = {
    email: string;
    password: string;
    passwordAgain: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    mode: "onSubmit",
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "pistol",
      passwordAgain: "pistol",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    const { passwordAgain, ...rest } = data;
    setLoading(true);
    dispatch(registerAsyncThunk(rest)).then((res) => {
      if (res.type.includes("fulfilled")) {
        localStorage.setItem("token", res.payload.token);
      }
      setLoading(false);
    }).finally(()=>{
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
    isSubmitting,
    loading,
  };
};
export type Props = ReturnType<typeof useRegister>;
export default useRegister;
