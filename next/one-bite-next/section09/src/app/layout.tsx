import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";

async function Footer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!response.ok) return <div>오류</div>;
  const book = await response.json();
  const bookCount = book.length;

  return (
    <div>
      <footer>제작 @winterlood</footer>
      <div>{bookCount}개의 도서가 있습니다</div>
    </div>
  );
}

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
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}