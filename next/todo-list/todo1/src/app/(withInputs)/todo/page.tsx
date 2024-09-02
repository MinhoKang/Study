import style from "./page.module.css";
import { getTodos } from "@/actions/getTodos.action";
import { AllTodos } from "@/components/allTodos";

const Page = async ({ searchParams }: { searchParams: { q: string } }) => {
  const allTodos = await getTodos();
  const { q } = searchParams;

  return <AllTodos allTodos={allTodos!} q={q} />;
};

export default Page;
