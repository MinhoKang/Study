import axios from "axios";

export const singUp = async (
  id: string,
  password: string,
  passwordCheck: string,
  phoneNumber: string
) => {
  try {
    const response = await axios.post("/signup", {
      id,
      password,
      passwordCheck,
      phoneNumber,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
