const Page = ({ searchParams }: { searchParams: { q?: string } }) => {
  return <div>search {searchParams.q}</div>;
};

export default Page;
 