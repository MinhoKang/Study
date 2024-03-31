export class ErrorPage {
  $main: HTMLElement;

  constructor() {
    this.$main = document.createElement("main");
  }

  returnContent() {
    const content = `<h1>Error</h1>`;
    this.$main.innerHTML = content;

    return this.$main;
  }
}
