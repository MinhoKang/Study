import { useNavigate } from "react-router-dom";
import { singUp } from "../apis/signUp";

type SignUpData = {
  email: string;
  passwordConfirm: string;
  password: string;
  phoneNumber: string;
};

export const useSignUp = async (data: SignUpData) => {
  const navigate = useNavigate();
  const { passwordConfirm, email, password, phoneNumber } = data;
  if (!passwordConfirm || !email || !password || !phoneNumber) return;

  const result = await singUp(email, password, passwordConfirm, phoneNumber);
  if (!result) return;
  if (result.status === 201) {
    alert(result.data.message);
    navigate("/");
  } else {
    alert(result.data.message);
  }
};
