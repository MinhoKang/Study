import axiosInstance from "./api";

export const login = async (id: string, password: string) => {
  try {
    const response = await axiosInstance.post("/login", {
      id,
      password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
