import axiosInstance from "../api";

export const getTodo = async (accessToken: string, keyword?: string) => {
  if (!accessToken) return;
  console.log("api", keyword);
  const endPoint = keyword ? `/todos?search=${keyword}` : "/todos";
  try {
    const response = await axiosInstance.get(endPoint, {
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
