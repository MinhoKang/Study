import { $app, $body } from "../main";
import LocalStorageUtil from "../utils/localStorage";

const LocalStorageAction = new LocalStorageUtil();

export default class Todo {
  todoArr: { seq: number; content: string }[];
  todoItem: Element | null | undefined;
  addBtn: Element | null | undefined;
  todoList: Element | null | undefined;

  constructor() {
    this.todoArr = [];
  }

  render() {
    this.setContent();
    this.addTodo();
  }

  setContent() {
    const content = `<h1>Todo</h1>
    <section>
      <form>
        <input id='todoInput' type='text' placeholder='todo 입력' autofocus='true'/>
        <button id='addBtn'>추가</button>
      </form>
      <ul id='todoList'>
      </ul>
    </section>
    `;

    $body.innerHTML = content;
    if ($app) {
      $app.appendChild($body);
    }
  }

  addTodo() {
    if (
      window.location.pathname === "/todo" &&
      LocalStorageAction.storage("get", "isAccept")
    ) {
      this.todoItem = document.querySelector("#todoInput") as HTMLInputElement;
      this.addBtn = document.querySelector("#addBtn") as HTMLButtonElement;

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
}

export const todoPage = new Todo();
