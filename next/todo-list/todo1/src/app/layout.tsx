import Link from "next/link";
import "./globals.css";
import style from "./layout.module.css";
import LogoutBtn from "@/components/logoutBtn";
import { getCookie } from "../../utils/cookie";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>
              <h1 className={style.title}>TODO LIST</h1>
            </Link>
          </header>
          <div className={style.childrenContainer}>{children}</div>
          {getCookie("accessToken") && <LogoutBtn />}
        </div>
        <div id="modal-root" className={style.modalRoot}>
          {modal}
        </div>
      </body>
    </html>
  );
}
