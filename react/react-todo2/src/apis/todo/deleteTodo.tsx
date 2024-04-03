import axiosInstance from "../api";

export const deleteTodo = async (id: number, accessToken: string) => {
  try {
    const response = await axiosInstance.delete(`/todo/:${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
