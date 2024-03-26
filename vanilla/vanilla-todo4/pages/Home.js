import { $app } from "../main";

class Home {
  constructor() {}
  render() {}
  setContent() {
    const content = `<h1>Home</h1>`;

    const $body = document.createElement("main");
    $body.innerHTML = content;
    $app.appendChild($body);
  }
}

export const homePage = new Home();
