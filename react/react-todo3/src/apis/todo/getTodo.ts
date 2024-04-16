import axiosInstance from "../api";

export const getTodo = async (accessToken: string) => {
  if (!accessToken) return;
  try {
    const response = await axiosInstance.get("/todos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
