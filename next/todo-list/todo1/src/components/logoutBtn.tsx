"use client";

import { useRouter } from "next/navigation";
import style from "./logoutBtn.module.css";
import { logout } from "../../utils/logout";

const LogoutBtn = () => {
  const router = useRouter();

  const onClick = () => {
    logout()
    router.push("/");
  };

  return (
    <button className={style.container} onClick={onClick}>
      LOGOUT
    </button>
  );
};

export default LogoutBtn;
