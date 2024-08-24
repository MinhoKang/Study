import ClientComponent from "../../../components/ClientComponent";

const Page = ({ searchParams }: { searchParams: { q?: string } }) => {
  return (
    <div>
      search {searchParams.q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};

export default Page;
