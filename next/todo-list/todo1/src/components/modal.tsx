"use client";

import { createPortal } from "react-dom";
import style from "./modal.module.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      setIsOpen(true);
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      router.back();
    }, 300); // 모달 닫힘 애니메이션 완료 후 이동
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") handleClose();
      }}
      className={`${style.modal} ${isOpen ? style.open : ''}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;