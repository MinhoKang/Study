export interface TodoProps {
  id: number;
  todo: string;
  content: string;
}

export interface SignupProps {
  id: string;
  password: string;
  passwordCheck: string;
  phoneNumber: string;
}

export type LoginProps = Omit<SignupProps, "passwordCheck" | "phoneNumber">;

export interface CommentsProps {
  id: number;
  content: string;
}
