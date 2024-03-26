import { $app, $body } from "../main";

class Home {
  constructor() {}
  render() {
    this.setContent()
  }
  setContent() {
    const content = `<h1>Home</h1>`;

    $body.innerHTML = content;
    $app.appendChild($body);
  }
}

export const homePage = new Home();
