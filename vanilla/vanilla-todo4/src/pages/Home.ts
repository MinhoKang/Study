import { $app, $body } from "../main";

class Home {
  $element;
  constructor() {
    this.$element = document.createElement("div")
  }

  render() {
   // 자신의 엘리먼트를 만들어서 반환
   return this.$element.innerHTML = `<h1>Home</h1>`

  }
  // setContent() {
  //   const content = `<h1>Home</h1>`;

  //   $body.innerHTML = content;
  //   if ($app) {
  //     $app.appendChild($body);
  //   }
  // }
}

export const homePage = new Home();
