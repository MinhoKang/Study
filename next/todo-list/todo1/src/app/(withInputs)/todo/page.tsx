import style from "./page.module.css";
import { getTodos } from "@/actions/getTodos.action";
import { AllTodos } from "@/components/allTodos";

const Page = async () => {
  const allTodos = await getTodos();

  return <AllTodos allTodos={allTodos!} />;
};

export default Page;
