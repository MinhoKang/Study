const Page = ({ searchParams }: { searchParams: { q?: string } }) => {
  console.log(searchParams);
  return <div>search {searchParams.q}</div>;
};

export default Page;
