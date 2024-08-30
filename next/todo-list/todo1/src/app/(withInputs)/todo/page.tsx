
import style from "./page.module.css";
import { getTodos } from "@/actions/getTodos.action";
import { AllTodos } from "@/components/allTodos";

const Page = async () => {
  const allTodos = await getTodos();
  return (
    <div>
      <AllTodos allTodos={allTodos!} />
    </div>
  );
};

export default Page;
