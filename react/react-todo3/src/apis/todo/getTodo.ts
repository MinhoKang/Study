import axiosInstance from "../api";

export const getTodo = async (accessToken: string, searchQuery?: string) => {
  if (!accessToken) return;
  const endPoint = searchQuery ? `/todos?search=${searchQuery}` : `/todos`;
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
