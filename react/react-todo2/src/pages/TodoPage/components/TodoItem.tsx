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
import { TodoObj } from "../../../utils/types";
import DeleteModal from "./DeleteModal";

const TodoItem = ({ item }: { item: TodoObj }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [edited, setEdited] = useState(false);
  const [editedTodo, setEditedTodo] = useState(item.todo);
  const [showModal, setShowModal] = useState(false);
  const accessToken = sessionStorageAction.storage("get", "accessToken");

  const handleEdit = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      if (!accessToken) return;
      const result = await editTodo(editedTodo, item.id, accessToken);
      console.log("수정", result);
      setEdited(false);
    } catch (error) {
      console.log("수정", error);
    }
  };

  const handleDelete = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      if (!accessToken) return;
      const result = await deleteTodo(item.id, accessToken);
      console.log("삭제", result);
    } catch (error) {
      console.log("삭제", error);
    }
  };

  const handleCheck = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={styles.itemBox}>
      {!edited ? (
        <p
          className={cn(
            styles.todoText,
            isCompleted ? styles.lineThrough : null
          )}
        >
          {item.todo}
        </p>
      ) : (
        <input
          className={styles.editInput}
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
        />
      )}
      {showModal && <DeleteModal item={item} setShowModal={setShowModal} />}
      {!isCompleted && !edited && (
        <div className={styles.buttons}>
          <div
            className={cn(styles.button, styles.complete)}
            onClick={(e) => {
              handleCheck(e);
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div
            className={cn(styles.button, styles.edit)}
            onClick={() => {
              setEdited(true);
            }}
          >
            <FontAwesomeIcon icon={faPencil} />
          </div>
          <div
            className={cn(styles.button, styles.remove)}
            onClick={() => {
              setShowModal(true);
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      )}
      {edited && (
        <div className={styles.editButtons}>
          <div
            className={styles.editBtn}
            onClick={(e) => {
              handleEdit(e);
            }}
          >
            EDIT
          </div>
          <div className={styles.editBtn} onClick={() => setEdited(false)}>
            CANCEL
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
