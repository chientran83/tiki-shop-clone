import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { AuthState } from "./types";
import { register } from "./services";

const initialState: AuthState = {
  loggedInUser: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.loggedInUser = true;
      state.user = action.payload;
    },
    logout(state) {
      state.loggedInUser = false;
      state.user = null;
    },
    update(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAsyncThunk.fulfilled, (state, action) => {
      state.loggedInUser = true;
      // because api doesn't return login user data so i will fake data ^^
      state.user = {
        id: action.payload.id,
        email: "janet.weaver@reqres.in",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        name: "Chien Tran",
        dateOfBirt: "08/03/2001",
        gender: "nam",
        address: "Phuong Nam - Uong Bi - Quang Ninh",
      };
    });
  },
});

export const registerAsyncThunk = createAsyncThunk(
  "auth/register",
  async (user: any) => {
    const res = await register(user);
    return res.data;
  }
);

export default authSlice;
