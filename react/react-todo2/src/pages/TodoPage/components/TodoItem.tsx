import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./todoItem.module.scss";
import cn from "classnames";
import {
  faCheck,
  faPencil,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { sessionStorageAction } from "../../../hooks/sessionStorageAction";
import { editTodo } from "../../../apis/todo/editTodo";
import { deleteTodo } from "../../../apis/todo/deleteTodo";

const TodoItem = ({ item }) => {
  const [edited, setEdited] = useState("");
  const accessToken = sessionStorageAction.storage("get", "accessToken");

  const handleEdit = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!accessToken) return;
    try {
      const result = await editTodo("수정", item.id, accessToken);
      console.log("수정", result);
    } catch (error) {
      console.log("수정", error);
    }
  };

  const handleDelete = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!accessToken) return;
    try {
      const result = await deleteTodo(item.id, accessToken);
      console.log("삭제", result);
    } catch (error) {
      console.log("삭제", error);
    }
  };

  return (
    <div className={styles.itemBox}>
      <p className={styles.todoText}>{item.todo}</p>
      <div className={styles.buttons}>
        <div className={cn(styles.button, styles.complete)}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div
          className={cn(styles.button, styles.edit)}
          onClick={(e) => {
            handleEdit(e);
          }}
        >
          <FontAwesomeIcon icon={faPencil} />
        </div>
        <div
          className={cn(styles.button, styles.remove)}
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
