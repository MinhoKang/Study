import styles from "./todoList.module.scss";
import cn from "classnames";

const TodoList = () => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.text}></div>
      <div className={styles.buttons}>
        <div className={cn(styles.button, styles.complete)}></div>
        <div className={cn(styles.button, styles.edit)}></div>
        <div className={cn(styles.button, styles.remove)}></div>
      </div>
    </div>
  );
};

export default TodoList;
