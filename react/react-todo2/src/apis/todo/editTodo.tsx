import axiosInstance from "../api";

export const editTodo = async (
  todo: string,
  id: number,
  accessToken: string
) => {
  try {
    const response = await axiosInstance.put(
      `/todo/:${id}`,
      { todo },
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
