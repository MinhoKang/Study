const TodoForm = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          id="todoInput"
          placeholder="내용을 입력하세요"
          autoFocus
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default TodoForm;
