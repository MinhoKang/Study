import Link from "next/link";
import "./globals.css";
import style from "./layout.module.css";
import LogoutBtn from "@/components/logoutBtn";
import { getCookie } from "../../utils/cookie";
import { Metadata } from "next";
import { ThemeContextProvider } from "@/context/themeContext";
import { ThemeProvider } from "@/context/themeProvider";
import ThemeToggleButton from "@/components/themeToggleButton";

export const metadata: Metadata = {
  title: "TODO LIST",
  description: "This is TodoList",
};

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
        <ThemeContextProvider>
          <ThemeProvider>
            <div className={style.container}>
              <ThemeToggleButton />
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
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
