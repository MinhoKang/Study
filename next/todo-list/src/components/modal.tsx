"use client";

import style from "./modal.module.css";
import { ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({ top: 0 });
    }
  }, []);

  return createPortal(
    <dialog
      className={style.modal}
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") router.back();
      }}
      ref={dialogRef}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
