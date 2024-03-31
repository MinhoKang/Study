import { Router } from "../../../router";
import { Store } from "../../store/store";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export class TodoPage {
  store: Store;
  $app: HTMLElement;
  $main: HTMLElement;
  $section: HTMLElement;
  router: Router;
  TodoList: TodoList;
  TodoInput: TodoInput;

  constructor($app: HTMLElement, store: Store, router: Router) {
    this.$main = document.createElement("main");
    this.$section = document.createElement("section");
    this.$app = $app;
    this.store = store;
    this.router = router;
    this.TodoInput = new TodoInput(
      this.$app,
      this.$main,
      this.store,
      this.$section
    );
    this.TodoList = new TodoList(
      this.$app,
      this.$main,
      this.store,
      this.$section
    );
  }

  returnContent() {
    this.TodoInput.returnContent();
    this.TodoList.returnContent();
    this.$main.appendChild(this.$section);

    return this.$main;
  }
}
