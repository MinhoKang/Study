import { SearchableLayout } from "@/components/SearchableLAyout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const Index = () => {
  const router = useRouter();

  const { q } = router.query;

  return <h1>search {q}</h1>;
};

export default Index;

Index.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
