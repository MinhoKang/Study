export class HomePage {
  $main: HTMLElement;

  constructor() {
    this.$main = document.createElement("main");
  }

  returnContent() {
    const content = `<h1>Home</h1>`;
    this.$main.innerHTML = content;

    return this.$main;
  }
}
