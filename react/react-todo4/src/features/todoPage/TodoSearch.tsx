import Container from "../../components/Container";
import css from "../../styles/features/todoPage/todoSearch.module.css";

const TodoSearch = () => {
  return (
    <Container className={css.container}>
      <form className={css.form}>
        <input type="text" className={css.input} id="input" autoFocus />
      </form>
    </Container>
  );
};

export default TodoSearch;
