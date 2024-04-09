export interface ButtonProps {
  type: "button" | "submit" | "reset";
  text?: string;
  id?: string;
  form?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
