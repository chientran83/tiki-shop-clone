import { createSelector } from "@reduxjs/toolkit";
import { AuthState } from "./types";

type RootState = {
  auth: AuthState;
};

const authSelector = (state: RootState) => state.auth;
export const loggedInUserSelector = createSelector(
  authSelector,
  (auth) => auth.loggedInUser
);
export const userSelector = createSelector(authSelector, (auth) => {
  return auth.user;
});
