export class ErrorPage {
  $app: HTMLElement;
  $main: HTMLElement;

  constructor($app: HTMLElement) {
    this.$app = $app;
    this.$main = document.createElement("main");
  }

  returnContent() {
    const content = `<h1>Error</h1>`;
    this.$main.innerHTML = content;

    return this.$main;
  }
}
