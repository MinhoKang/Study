export default class Todo {
  todoArr;
  constructor() {
    this.todoArr = [];
  }
  addTodo() {
    if (
      window.location.pathname === "/todo"
      // &&
      // localStorage.getItem("isAccept") === "true"
    ) {
      const todoItem = document.getElementById("todoInput");
      const addBtn = document.getElementById("addBtn");
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const todoListItem = todoItem.value;
        if (todoListItem) {
          this.todoArr.push({
            seq: this.todoArr.length,
            content: todoListItem,
          });
          todoItem.value = "";
          this.renderTodo();
        } else {
          alert("내용을 입력하세요");
        }
      });
    }
  }

  renderTodo() {
    console.log("렌더전");
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = this.todoArr
      .map((item) => {
        console.log(item);
        console.log(todoList);
        return `<li seq=${item.seq}>${item.content}</li><button class='removeBtn' seq=${item.seq}>삭제</button>`;
      })
      .join("");
    console.log("렌더후");
    this.removeTodo();
  }

  removeTodo() {
    const removeBtns = document.querySelectorAll(".removeBtn");
    removeBtns.forEach((removeBtn) =>
      removeBtn.addEventListener("click", (e) => {
        console.log("아이템", this.todoArr);
        const seq = e.target.getAttribute("seq");
        const seqNum = parseInt(seq);
        this.todoArr.splice(seqNum, 1);
        for (let i = seqNum; i < this.todoArr.length; i++) {
          this.todoArr[i].seq = i;
        }
        this.renderTodo();
      })
    );
  }
}
