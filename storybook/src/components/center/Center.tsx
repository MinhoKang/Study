import "./center.css";

interface CenterProps {
  children: React.ReactNode;
}

const Center = (props: CenterProps) => {
  return <div className="center">{props.children}</div>;
};

export default Center;
