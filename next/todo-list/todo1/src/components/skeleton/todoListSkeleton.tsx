import TodoItem from "./todoItem";

const TodoListSkeleton = ({ count }: { count: number }) => {
  return new Array(count)
    .fill(0)
    .map((_, index) => <TodoItem key={`todoSkeleton-${index}`} />);
};

export default TodoListSkeleton;
