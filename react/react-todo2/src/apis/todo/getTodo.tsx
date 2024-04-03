import axiosInstance from "../api";

export const getTodo = async (accessToken: string) => {
  try {
    const response = await axiosInstance.get("/todos", {
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
