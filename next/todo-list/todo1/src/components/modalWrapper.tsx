import { ReactNode } from "react";
import style from "./modalWrapper.module.css";

type Props = {
  open: boolean;
  chilren: ReactNode;
  close: () => void;
};

const ModalWrapper = ({ open, chilren, close }: Props) => {
  return (
    <div
      className={style.container}
      id="dim"
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        target.id === "dim" && close();
      }}
    >
      {chilren}
    </div>
  );
};

export default ModalWrapper;
