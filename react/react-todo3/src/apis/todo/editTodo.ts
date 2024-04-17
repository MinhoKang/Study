import axiosInstance from "../api";

export const editTodo = async (
  todo: string,
  id: number,
  accessToken: string
) => {
  if (!accessToken) return;
  try {
    const response = await axiosInstance.put(
      `/todo?id=${id}`,
      { todo },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
