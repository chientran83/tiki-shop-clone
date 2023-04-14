import axiosInstance from "../../libraries/axios";
import { getAccessToken } from "../../utilities/method";
import { User } from "./types";

export const login = async (user: User) => {
  return await axiosInstance({ url: "/login", method: "post", data: user });
};
export const register = async (user: User) => {
  return await axiosInstance({ url: "/register", method: "post", data: user });
};
export const getAuth = async () => {
  // because don't have api getAuth so i will fake api ^^
  if (getAccessToken()) {
    return Promise.resolve({
      status: 200,
      user: {
        id: "4",
        email: "janet.weaver@reqres.in",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        name: "Chien Tran",
        gender: "male",
        address: "Phuong Nam - Uong Bi - Quang Ninh",
      },
    });
  }
  return Promise.reject({ status: 400, error: "error" });
};
export const updateUser = async (user: User) => {
  return axiosInstance({ url: "users/4", method: "put", data: user });
};
