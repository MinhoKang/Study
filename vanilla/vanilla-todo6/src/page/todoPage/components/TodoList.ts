import { Store } from "../../../store/store";

export class TodoList {
  store: Store;
  $section: HTMLElement;
  todoListSection: HTMLElement;

  constructor(store: Store, $section: HTMLElement) {
    this.store = store;
    this.$section = $section;
    this.todoListSection = document.createElement("div");
    this.todoListSection.addEventListener("click", this.handleClick.bind(this));
    this.store.addObserver(this);

    // TODO: 투두 리스트 리팩토링
  }

  returnContent() {
    const content = `
      <ul id='todoList'>
      ${this.store
        .getTodoItems()
        .map(
          (todo) =>
            `<li>
        ${todo.content} <button class='removeBtn' data-seq='${todo.seq}'>삭제</button>
        </li>`
        )
        .join("")}
      </ul>
    `;
    this.todoListSection.innerHTML = content;
    this.$section.appendChild(this.todoListSection);
  }

  handleClick(e: any) {
    e.preventDefault();
    const todo = e.target;
    const seq = todo.dataset.seq;
    this.store.removeTodoItem(Number(seq));
  }
}
