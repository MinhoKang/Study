import styles from "./todoForm.module.scss";

const TodoForm = () => {
  return (
    <div className="formContainer">
      <form action="">
        <label className={styles.label}>
          <input type="text" placeholder="Add a new task" />
          <button type="submit">+</button>
        </label>
      </form>
    </div>
  );
};

export default TodoForm;
