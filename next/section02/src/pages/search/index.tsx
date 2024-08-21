import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const { q } = router.query;

  return <h1>search {q}</h1>;
};

export default Index;
