import { Store } from "../store/store";

export class TodoPage {
  store: Store;
  $app: HTMLElement;
  $main: HTMLElement;

  constructor($app: HTMLElement, store: Store) {
    this.$main = document.createElement("main");
    this.$app = $app;
    this.store = store;
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
    console.log("리턴");
    return this.$main;
  }
}
