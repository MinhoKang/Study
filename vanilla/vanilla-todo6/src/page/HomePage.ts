import { Router } from "../../router";
import { Store } from "../store/store";

export class HomePage {
  store: Store;
  $app: HTMLElement;
  $main: HTMLElement;

  constructor($app: HTMLElement, store: Store) {
    this.$main = document.createElement("main");
    this.$app = $app;
    this.store = store;
  }

  returnContent(router: Router) {
    const content = `<h1>Home</h1>`;
    this.$main.innerHTML = content;

    return this.$main;
  }
}
