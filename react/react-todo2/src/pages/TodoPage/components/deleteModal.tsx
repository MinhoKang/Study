import { SetStateAction } from "react";
import { deleteTodo } from "../../../apis/todo/deleteTodo";
import { sessionStorageAction } from "../../../hooks/sessionStorageAction";
import { TodoObj } from "../../../utils/types";
import styles from "./deleteModal.module.scss";
import cn from "classnames";

interface DeleteModalProps {
  item: TodoObj;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsChanged: React.Dispatch<SetStateAction<boolean>>;
  isChanged: boolean;
}

const DeleteModal = ({
  item,
  setShowModal,
  setIsChanged,
  isChanged,
}: DeleteModalProps) => {
  const accessToken = sessionStorageAction.storage("get", "accessToken");

  const handleDelete = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      const result = await deleteTodo(item.id, accessToken!);
      await setShowModal(false);
      setIsChanged(!isChanged);
      console.log("삭제", result);
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
