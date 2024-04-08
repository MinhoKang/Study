import { FormProps } from "../../types/form";

const Form = ({ id, className, children }: FormProps) => {
  return (
    <form id={id} className={className}>
      {children}
    </form>
  );
};

export default Form;
