type Props = {
  type: any;
  text: string;
  onClick: any;
  className: any;
};

const DetailButton = (props: Props) => {
  return <button {...props}>{props.text}</button>;
};

export default DetailButton;
