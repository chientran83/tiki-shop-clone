import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .max(25)
      .min(16)
      .required("Email không được để trống"),
    password: yup
      .string()
      .max(20)
      .min(3)
      .required("Password không được để trống"),
  })
  .required();
