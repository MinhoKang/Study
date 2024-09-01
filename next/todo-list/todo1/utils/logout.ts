"use server";

import { deleteCookie } from "./cookie";

export const logout = () => {
  deleteCookie("accessToken");
};
