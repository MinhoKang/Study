import axiosInstance from "./api";

export const singUp = async (
  id: string,
  password: string,
  passwordCheck: string,
  phoneNumber: string
) => {
  try {
    const response = await axiosInstance.post("/signup", {
      id,
      password,
      passwordCheck,
      phoneNumber,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
