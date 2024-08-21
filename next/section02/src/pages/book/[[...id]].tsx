import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>book {id}</div>;
};

export default Page;
