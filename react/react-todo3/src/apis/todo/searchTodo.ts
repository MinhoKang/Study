import { AxiosError } from "axios";
import axiosInstance from "../api";

export const searchTodo = async (keyword: string, accessToken: string) => {
  try {
    const response = await axiosInstance.get(`/todos?search=${keyword}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      // TODO: alert가 아닌 화면에 나오도록
      alert(error.response!.data.message);
    }
  }
};
