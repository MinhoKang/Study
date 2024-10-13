import axiosInstance from "../api";

export const getTodo = async (accessToken: string, keyword?: string) => {
  if (!accessToken) return;

  const endPoint = keyword ? `/todos?search=${keyword}` : "/todos";
  try {
    const response = await axiosInstance.get(endPoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
