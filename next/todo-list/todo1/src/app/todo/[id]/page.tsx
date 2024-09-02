import { TodoInfo } from "@/components/todoInfo";
import { getTodoById } from "../../../../utils/todos";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { id: number };
}): Promise<Metadata | null> => {
  const todo = await getTodoById(params.id);
  if (todo) {
    return {
      title: `${todo.todo} - TODO LIST`,
      description: `${todo.content}`,
      openGraph: {
        title: `${todo.todo} - TODO LIST`,
        description: `${todo.content}`,
      },
    };
  } else {
    return {
      title: `TODO - TODO LIST`,
      description: `TODO CONTENT`,
      openGraph: {
        title: `TODO - TODO LIST`,
        description: `TODO CONTENT`,
      },
    };
  }
};

const Page = ({ params }: { params: { id: number } }) => {
  return <TodoInfo id={params.id} />;
};

export default Page;
