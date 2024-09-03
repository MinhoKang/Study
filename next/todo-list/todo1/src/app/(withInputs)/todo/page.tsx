import style from "./page.module.css";
import { getTodos } from "@/actions/getTodos.action";
import { AllTodos } from "@/components/allTodos";
import { Suspense } from "react";
import TodoListSkeleton from "@/components/skeleton/todoListSkeleton";

const Page = async ({ searchParams }: { searchParams: { q: string } }) => {
  const allTodos = await getTodos();
  const { q } = searchParams;

  return (
    <Suspense fallback={<TodoListSkeleton count={3} />}>
      <AllTodos allTodos={allTodos!} q={q} />
    </Suspense>
  );
};

export default Page;
