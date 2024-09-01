import { TodoInfo } from "@/components/todoInfo";

const Page = ({ params }: { params: { id: number } }) => {
  return <TodoInfo id={params.id} />;
};

export default Page;
