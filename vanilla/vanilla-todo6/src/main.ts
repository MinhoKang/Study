import { Store } from "../src/store/store";
import { Router } from "./../router";

export const $header = document.createElement("header");
export const $body = document.createElement("main");

class Main {
  store: Store;
  router: Router;
  $app: HTMLElement;

  constructor() {
    this.$app = document.querySelector("#app")!;
    this.store = new Store();
    this.router = new Router(this.$app, this.store);
  }
}

new Main();
