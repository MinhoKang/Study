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
    console.log(error);
  }
};
