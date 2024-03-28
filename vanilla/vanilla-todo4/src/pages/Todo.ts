import { $app, $body } from "../main";
import { store2 } from "../store/store2";
import LocalStorageUtil from "../utils/localStorage";

const LocalStorageAction = new LocalStorageUtil();

export default class Todo {
  // todoArr: { seq: number; content: string }[];
  // todoItem: Element | null | undefined;
  // addBtn: Element | null | undefined;
  todoList: Element | null | undefined;

  constructor() {
    // this.todoArr = [];
    store2.addObserver(this.render.bind(this));
  }

  render() {
    this.setContent();
    this.renderTodo();
    this.addTodo();
    this.removeTodo();
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
      // this.todoItem = document.querySelector("#todoInput");
      // this.addBtn = document.querySelector("#addBtn");

      const addBtn = document.querySelector("#addBtn");
      const todoInput = document.querySelector("#todoInput");

      if (addBtn instanceof HTMLButtonElement) {
        addBtn.addEventListener("click", (e: Event) => {
          if (todoInput instanceof HTMLInputElement) {
            e.preventDefault();
            if (todoInput) {
              const todoListItem = todoInput.value;
              if (todoListItem) {
                store2.addTodoItem({
                  seq: store2.todoArr.length,
                  content: todoListItem,
                });
                // this.renderTodo();
                todoInput.value = "";
              } else {
                alert("내용을 입력하세요");
              }
            }
          }
        });
      }
    }
  }

  renderTodo() {
    const todoList = document.getElementById("todoList");
    const todoItems = store2.getTodoItems();
    if (todoList) {
      todoList.innerHTML = todoItems
        .map(
          (item) =>
            `<li>${item.content}<button class='removeBtn' seq='${item.seq}'>삭제</button></li>`
        )
        .join("");
    }
  }

  removeTodo() {
    const removeBtns = document.querySelectorAll(".removeBtn");
    removeBtns.forEach((removeBtn) => {
      removeBtn.addEventListener("click", (e: Event) => {
        const seq = parseInt(
          (e.target as HTMLElement).getAttribute("seq") || ""
        );
        if (!isNaN(seq)) {
          store2.removeTodoItem(seq);
          // this.renderTodo();
        }
      });
    });
  }

  // removeTodo() {
  //   const removeBtns = document.querySelectorAll(".removeBtn");
  //   removeBtns.forEach((removeBtn) =>
  //     removeBtn.addEventListener("click", (e: Event) => {
  //       const target = e.target;
  //       if (target instanceof HTMLElement) {
  //         const seq = target.getAttribute("seq");
  //         if (seq) {
  //           // const seqNum: number = parseInt(seq);
  //           // this.todoArr.splice(seqNum, 1);
  //           // for (let i = seqNum; i < this.todoArr.length; i++) {
  //           //   this.todoArr[i].seq = i;
  //           // }
  //           // store.remove("todoArr", seq, this.renderTodo.bind(this));
  //           const seqNum = parseInt(seq);
  //           store2.removeTodoItem(seqNum);
  //           // this.renderTodo();
  //         }
  //       }
  //     })
  //   );
  // }
}

export const todoPage = new Todo();
