import { deleteTodo } from "../../../apis/todo/deleteTodo";
import { sessionStorageAction } from "../../../hooks/sessionStorageAction";
import { AddTodoListFunction, TodoObj } from "../../../utils/types";
import styles from "./deleteModal.module.scss";
import cn from "classnames";

const DeleteModal = ({
  item,
  setShowModal,
  refreshTodo,
}: {
  item: TodoObj;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  refreshTodo: AddTodoListFunction;
}) => {
  const accessToken = sessionStorageAction.storage("get", "accessToken");

  const handleDelete = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      if (!accessToken) return;
      const result = await deleteTodo(item.id, accessToken);
      await setShowModal(false);
      console.log("삭제", result);
      // refreshTodo(result?.data);
    } catch (error) {
      console.log("삭제", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <p className={styles.text}>삭제하시겠습니까?</p>
        <div className={styles.btns}>
          <div
            className={cn(styles.btn, styles.deleteBtn)}
            onClick={(e) => handleDelete(e)}
          >
            삭제
          </div>
          <div
            className={cn(styles.btn, styles.cancelBtn)}
            onClick={() => setShowModal(false)}
          >
            취소
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
