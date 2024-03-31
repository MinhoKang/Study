import { Store } from "../../../store/store";

export class TodoList {
  store: Store;
  $section: HTMLElement;
  todoListSection: HTMLElement;

  constructor(store: Store, $section: HTMLElement) {
    this.store = store;
    this.$section = $section;
    this.todoListSection = document.createElement("div");
    this.store.addObserver(this);
  }

  returnContent() {
    const content = `
      <ul id='todoList'>
      ${this.store
        .getTodoItems()
        .map(
          (todo) =>
            `<li>
        ${todo.content} <button class='removeBtn' seq='${todo.seq}'>삭제</button>
        </li>`
        )
        .join("")}
      </ul>
    `;
    this.todoListSection.innerHTML = content;
    this.$section.appendChild(this.todoListSection);
    this.init();
  }

  init() {
    this.removeTodo();
  }

  removeTodo() {
    const removeBtns = document.querySelectorAll(".removeBtn");

    if (!removeBtns) return;

    removeBtns.forEach((removeBtn) => {
      removeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const seq = parseInt(
          (e.target as HTMLElement).getAttribute("seq") || ""
        );
        if (!isNaN(seq)) {
          this.store.removeTodoItem(seq);
        }
      });
    });
  }
}
