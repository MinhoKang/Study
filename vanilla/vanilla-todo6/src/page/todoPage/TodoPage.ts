import { Store } from "../../store/store";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export class TodoPage {
  store: Store;
  $main: HTMLElement;
  $section: HTMLElement;
  TodoForm: TodoForm;
  TodoList: TodoList;

  constructor(store: Store) {
    this.$main = document.createElement("main");
    this.$section = document.createElement("section");
    this.store = store;
    this.TodoForm = new TodoForm(this.store, this.$section);
    this.TodoList = new TodoList(this.store, this.$section);
  }

  returnContent() {
    this.TodoForm.returnContent();
    this.TodoList.returnContent();
    this.$main.appendChild(this.$section);

    return this.$main;
  }
}
