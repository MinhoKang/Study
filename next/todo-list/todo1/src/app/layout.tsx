import Link from "next/link";
import "./globals.css";
import style from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
      </body>
    </html>
  );
}
