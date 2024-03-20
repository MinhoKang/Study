import Item from "./components/Item";

class App {
  constructor() {
    const $app = document.querySelector("#app");
    new Item($app);
  }
}
new App();
