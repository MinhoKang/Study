import Link from "next/link";
import "./globals.css";
import style from "./layout.module.css";

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
            <Link href={"/"}>TODO LIST</Link>
          </header>
          <div className={style.childrenContainer}>{children}</div>
        </div>
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
