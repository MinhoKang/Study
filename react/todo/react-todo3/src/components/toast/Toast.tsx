import React, { SetStateAction, useEffect } from "react";
import css from "../../styles/toast.module.css";

interface ToastProps {
  message: string;
  setToast: React.Dispatch<SetStateAction<boolean>>;
}

const Toast = ({ message, setToast }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div className={css.slideTop}>
      <p className={css.message}>{message}</p>
    </div>
  );
};

export default Toast;
