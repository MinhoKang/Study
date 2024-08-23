import { ReactNode } from "react";
import Searchbar from "../../components/Searchbar";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Searchbar />
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book1</Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
