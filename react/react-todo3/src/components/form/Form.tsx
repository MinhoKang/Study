import { FormProps } from "../../types/form";

const Form = ({ id, className, children, onSubmit }: FormProps) => {
  return (
    <form id={id} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
