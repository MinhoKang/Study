import { $app } from "../main";

class Error {
  constructor() {}
  render() {}
  setContent() {
    const content = `<h1>Error</h1>`;
    const $body = document.createElement("main");
    $body.innerHTML = content;
    console.log($body.innerHTML);
    $app.appendChild($body);
  }
}
export const errorPage = new Error();
