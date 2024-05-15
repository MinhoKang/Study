import "./button.css";

interface ButtonProps {
  variant: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { variant = "primary", children, ...rest } = props;

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
