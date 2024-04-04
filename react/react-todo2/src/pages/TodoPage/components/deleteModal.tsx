import styles from "./deleteModal.module.scss";
import cn from "classnames";

const deleteModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <p className={styles.text}>삭제하시겠습니까?</p>
        <div className={styles.btns}>
          <div className={cn(styles.btn, styles.deleteBtn)}>삭제</div>
          <div className={cn(styles.btn, styles.cancelBtn)}>취소</div>
        </div>
      </div>
    </div>
  );
};

export default deleteModal;
