import Link from "next/link";
import "./globals.css";
import style from "./layout.module.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>TODO LIST</Link>
          </header>
          <div className={style.childrenContainer}>{children}</div>
          <div id="modal-root"></div>
        </div>
      </body>
    </html>
  );
}
