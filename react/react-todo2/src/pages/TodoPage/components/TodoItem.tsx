import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./todoItem.module.scss";
import cn from "classnames";
import {
  faCheck,
  faPencil,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { SetStateAction, useState } from "react";
import { sessionStorageAction } from "../../../hooks/sessionStorageAction";
import { editTodo } from "../../../apis/todo/editTodo";
import { TodoObj } from "../../../utils/types";
import DeleteModal from "./DeleteModal";

interface TodoItemProps {
  item: TodoObj;
  setIsChanged: React.Dispatch<SetStateAction<boolean>>;
  isChanged: boolean;
}

const TodoItem = ({ item, setIsChanged, isChanged }: TodoItemProps) => {
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
      setIsChanged(!isChanged);
    } catch (error) {
      console.log("수정", error);
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
      {showModal && (
        <DeleteModal
          item={item}
          setShowModal={setShowModal}
          setIsChanged={setIsChanged}
          isChanged={isChanged}
        />
      )}
      <div className={styles.buttons}>
        <div
          className={cn(isCompleted && styles.complete)}
          onClick={(e) => {
            handleCheck(e);
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </div>
        {!isCompleted && !edited && (
          <>
            <div
              className={cn(styles.edit)}
              onClick={() => {
                setEdited(true);
              }}
            >
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div
              className={cn(styles.remove)}
              onClick={() => {
                setShowModal(true);
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </>
        )}
      </div>
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
