import { Store } from "../../../store/store";

export class TodoInput {
  $app: HTMLElement;
  $main: HTMLElement;
  store: Store;
  $section: HTMLElement;

  constructor(
    $app: HTMLElement,
    $main: HTMLElement,
    store: Store,
    $sectoion: HTMLElement
  ) {
    this.$app = $app;
    this.$main = $main;
    this.store = store;
    this.$section = $sectoion;
  }

  returnContent() {
    const content = `<h1>Todo</h1>
      <form>
        <input id='todoInput' type='text' placeholder='todo 입력' autofocus='true'/>
        <button id='addBtn' type='submit'>추가</button>
      </form>
    `;
    this.$section.innerHTML = content;
    this.init();
  }

  init() {
    this.addTodo();
  }

  addTodo() {
    const addBtn = this.$section.querySelector("#addBtn");
    const todoInput: HTMLInputElement =
      this.$section.querySelector("#todoInput")!;

    if (!addBtn || !todoInput) return;

    addBtn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      if (!todoInput.value) {
        alert("내용을 입력하세요");
        return;
      }
      this.store.addTodoItem({
        seq: this.store.todoArr.length,
        content: todoInput.value,
      });
      todoInput.value = "";
    });
  }
}
