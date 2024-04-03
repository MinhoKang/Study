사용한 라이브러리

1. react-router-dom -사용 이유: 페이지 이동

2. redux toolkit -로그인 상태, 투두 리스트 등 전역 상태 관리

// 상위 컴포넌트 (예: TodoPage)
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import styles from "./todoPage.module.scss";
import TodoList from "./components/TodoList";
import { getTodo } from "../../../apis/todo/getTodo";
import { sessionStorageAction } from "../../../hooks/sessionStorageAction";

const TodoPage = () => {
const [todos, setTodos] = useState([]);

useEffect(() => {
getTodoList();
}, []);

const getTodoList = async () => {
const accessToken = await sessionStorageAction.storage(
"get",
"accessToken"
);
console.log(accessToken);
if (!accessToken) return;

    try {
      const result = await getTodo(accessToken);
      if (result && result.data) {
        setTodos(result.data);
      } else {
        console.error("에러");
      }
    } catch (error) {
      console.error(error);
    }

};

const addTodoToList = (newTodo) => {
setTodos([...todos, newTodo]);
};

return (
<div className={styles.container}>
<h1>TODO APP</h1>
<TodoList todos={todos} />
<TodoForm addTodoToList={addTodoToList} />
</div>
);
};

export default TodoPage;

// TodoForm 컴포넌트
import { useState } from "react";
import styles from "./todoForm.module.scss";
import { sessionStorageAction } from "../../../hooks/sessionStorageAction";
import { addTodo } from "../../../apis/todo/addTodo";

const TodoForm = ({ addTodoToList }) => {
const [todoInput, setTodoInput] = useState("");

const handleAdd = async (e: { preventDefault: () => void }) => {
e.preventDefault();
try {
const accessToken = sessionStorageAction.storage("get", "accessToken");
if (!accessToken) return;
const result = await addTodo(todoInput, accessToken);
console.log(result);
// 새로운 todo를 TodoPage의 상태에 추가
addTodoToList(result.data);
// 입력 폼 초기화
setTodoInput("");
} catch (error) {
console.log(error);
}
};

return (
<div className={styles.formContainer}>
<form>
<label className={styles.label}>
<input
type="text"
placeholder="Add a new task"
value={todoInput}
onChange={(e) => {
setTodoInput(e.target.value);
}}
/>
<button type="submit" onClick={(e) => handleAdd(e)}> +
</button>
</label>
</form>
</div>
);
};

export default TodoForm;
