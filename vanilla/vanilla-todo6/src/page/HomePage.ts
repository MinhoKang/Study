import { Router } from "../../router";
import { Store } from "../store/store";

export class HomePage {
  store: Store;
  $app: HTMLElement;
  $main: HTMLElement;
  router: Router;

  constructor($app: HTMLElement, store: Store, router: Router) {
    this.$main = document.createElement("main");
    this.$app = $app;
    this.store = store;
    this.router = router;
  }

  returnContent() {
    const content = `<h1>Home</h1>`;
    this.$main.innerHTML = content;

    return this.$main;
  }
}
