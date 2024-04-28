import axiosInstance from "../api";

export const editTodo = async (
  todo: string,
  id: number,
  accessToken: string,
  content?: string
) => {
  if (!accessToken) return;
  try {
    const response = await axiosInstance.put(
      `/todo?id=${id}`,
      { id, todo, content },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
