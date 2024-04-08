import axiosInstance from "../api";

export const deleteTodo = async (id: number, accessToken: string) => {
  if (!accessToken) return;
  try {
    const response = await axiosInstance.delete(`/todo?id=${id}`, {
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
