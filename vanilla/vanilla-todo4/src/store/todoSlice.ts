import LocalStorageUtil from "../utils/localStorage";

const LocalStorageAction = new LocalStorageUtil();

class TodoSlice {
  todoArr: { seq: number; content: string }[];
  todoItem: Element | null | undefined;
  addBtn: Element | null | undefined;
  todoList: Element | null | undefined;

  constructor() {
    this.todoArr = [];
  }

  addTodo() {
    if (
      window.location.pathname === "/todo" &&
      LocalStorageAction.storage("get", "isAccept")
    ) {
      this.todoItem = document.querySelector("#todoInput");
      this.addBtn = document.querySelector("#addBtn");

      if (this.addBtn instanceof HTMLButtonElement) {
        this.addBtn.addEventListener("click", (e: Event) => {
          if (this.todoItem instanceof HTMLInputElement) {
            e.preventDefault();
            if (this.todoItem) {
              const todoListItem = this.todoItem.value;
              if (todoListItem) {
                this.todoArr.push({
                  seq: this.todoArr.length,
                  content: todoListItem,
                });

                this.renderTodo();
                this.todoItem.value = "";
              } else {
                alert("내용을 입력하세요");
              }
            }
          }
        });
      }
    }
  }

  removeTodo() {
    const removeBtns = document.querySelectorAll(".removeBtn");
    removeBtns.forEach((removeBtn) =>
      removeBtn.addEventListener("click", (e: Event) => {
        const target = e.target;
        if (target instanceof HTMLElement) {
          const seq = target.getAttribute("seq");
          if (seq) {
            const seqNum: number = parseInt(seq);
            this.todoArr.splice(seqNum, 1);
            for (let i = seqNum; i < this.todoArr.length; i++) {
              this.todoArr[i].seq = i;
            }
            this.renderTodo();
          }
        }
      })
    );
  }

  renderTodo() {
    this.todoList = document.getElementById("todoList");
    if (this.todoList) {
      this.todoList.innerHTML = this.todoArr
        .map(
          (item) =>
            `<li seq=${item.seq}>${item.content}</li><button class='removeBtn' seq=${item.seq}>삭제</button>`
        )
        .join("");
      this.removeTodo();
      const todoArrChangeEvent = new CustomEvent("todoArrChange", {
        detail: { length: this.todoArr.length },
      });
      document.dispatchEvent(todoArrChangeEvent);
    }
  }
}

export const todoSlice = new TodoSlice();
