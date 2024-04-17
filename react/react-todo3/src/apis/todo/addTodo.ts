import axiosInstance from "../api";

export const addTodo = async (todo: string, accessToken: string) => {
  if (!accessToken) throw new Error("Access token is missing");
  try {
    const response = await axiosInstance.post(
      `/todo`,
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
    throw new Error("Failed to add todo");
  }
};
