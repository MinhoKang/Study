import styles from "./todoForm.module.scss";

const TodoForm = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <label className={styles.label}>
          <input type="text" placeholder="Add a new task" />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            +
          </button>
        </label>
      </form>
    </div>
  );
};

export default TodoForm;
