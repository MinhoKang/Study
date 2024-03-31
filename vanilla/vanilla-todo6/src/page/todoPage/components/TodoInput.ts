import { Store } from "../../../store/store";
import { TodoPage } from "../../TodoPage";

export class TodoInput {
  $app: HTMLElement;
  $main: HTMLElement;
  store: Store;
  TodoPage: TodoPage;

  constructor(
    $app: HTMLElement,
    $main: HTMLElement,
    store: Store,
    TodoPage: TodoPage
  ) {
    this.$app = $app;
    this.$main = $main;
    this.store = store;
    this.TodoPage = TodoPage;
  }

  returnContent() {
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

    this.$main.innerHTML = content;
  }

  
}
