const $app = document.querySelector("#app");

export default class Rendering {
  setHeader(page) {
    const $header = document.createElement("header");
    $header.innerHTML = page.render();
    $app.appendChild($header);
  }
  setBody(page) {
    const $body = document.createElement("main");
    $body.innerHTML = page.render();
    $app.appendChild($body);
  }
}
