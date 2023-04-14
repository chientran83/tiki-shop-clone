import * as yup from "yup";
import dayjs from "dayjs";

export const userSchema = yup
  .object({
    email: yup.string().email("Email không hợp lệ").max(25).min(16),
    name: yup.string().max(25).min(3),
    gender: yup.string().oneOf(["male", "female", "orther"]),
    address: yup.string().max(25).min(5),
    phoneNumber: yup.string().max(25).min(6),
    dateOfBirt: yup.date().max(dayjs().subtract(5, "year")).min(dayjs().subtract(30, "year")),
  })
  .required();
