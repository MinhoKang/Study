import { FormProps } from "../../types";

export const Form = ({ id, className, children, onSubmit }: FormProps) => {
  return (
    <form id={id} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
