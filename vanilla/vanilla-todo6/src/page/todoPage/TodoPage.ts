import { Store } from "../../store/store";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export class TodoPage {
  store: Store;
  $main: HTMLElement;
  $section: HTMLElement;
  TodoInput: TodoInput;
  TodoList: TodoList;

  constructor(store: Store) {
    this.$main = document.createElement("main");
    this.$section = document.createElement("section");
    this.store = store;
    this.TodoInput = new TodoInput(this.store, this.$section);
    this.TodoList = new TodoList(this.store, this.$section);
  }

  returnContent() {
    this.TodoInput.returnContent();
    this.TodoList.returnContent();
    this.$main.appendChild(this.$section);

    return this.$main;
  }
}
