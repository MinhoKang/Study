import { Router } from "../../router";
import { LocalStorageAction } from "../../utils/localStorageAction";
import { Store } from "../store/store";
import { TodoInput } from "./todoPage/components/TodoInput";
import { TodoList } from "./todoPage/components/TodoList";

const localStorageAction = new LocalStorageAction();

export class TodoPage {
  store: Store;
  $app: HTMLElement;
  $main: HTMLElement;
  router: Router;
  TodoList: TodoList;
  TodoInput: TodoInput;

  constructor($app: HTMLElement, store: Store, router: Router) {
    this.$main = document.createElement("main");
    this.$app = $app;
    this.store = store;
    this.router = router;
    this.TodoList = new TodoList(this.$app, this.$main, this.store, this);
    this.TodoInput = new TodoInput(this.$app, this.$main, this.store, this);
    this.store.addObserver(this);
  }

  returnContent() {
    this.TodoInput.returnContent();
    this.init();
    return this.$main;
  }

  init() {
    this.renderTodo();
    this.addTodo();
    this.removeTodo();
  }

  addTodo() {
    if (
      window.location.pathname === "/todo" &&
      localStorageAction.storage("get", "isAccept")
    ) {
      const addBtn = this.$main.querySelector("#addBtn");
      const todoInput = this.$main.querySelector("#todoInput");

      if (addBtn instanceof HTMLButtonElement) {
        addBtn.addEventListener("click", (e: Event) => {
          if (todoInput instanceof HTMLInputElement) {
            e.preventDefault();
            if (todoInput) {
              const todoListItem = todoInput.value;
              if (todoListItem) {
                this.store.addTodoItem({
                  seq: this.store.todoArr.length,
                  content: todoListItem,
                });
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

  removeTodo() {
    const removeBtns = this.$main.querySelectorAll(".removeBtn");
    removeBtns.forEach((removeBtn) => {
      removeBtn.addEventListener("click", (e: Event) => {
        const seq = parseInt(
          (e.target as HTMLElement).getAttribute("seq") || ""
        );
        if (!isNaN(seq)) {
          this.store.removeTodoItem(seq);
        }
      });
    });
  }

  renderTodo() {
    const todoList = this.$main.querySelector("#todoList");
    const todoItems = this.store.getTodoItems();
    if (todoList) {
      todoList.innerHTML = todoItems
        .map(
          (item) =>
            `<li>${item.content}<button class='removeBtn' seq='${item.seq}'>삭제</button></li>`
        )
        .join("");
    }
  }
}
