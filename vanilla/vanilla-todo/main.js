import "./style.css";
import { Todo } from "./pages/Todo.js";
import { Home } from "./pages/Home.js";
import { Login } from "./pages/Login.js";

const $appElement = document.querySelector("#app");

const routers = [
  // TODO: 페이지 라우터 정의;
  {
    path: "/",
    name: "Home",
    element: new Home($appElement),
  },
  {
    path: "/todo",
    name: "Todo",
    element: new Todo($appElement),
  },
  {
    path: "/login",
    name: "Login",
    element: new Login($appElement),
  },
];

class App {
  constructor($target) {
    // TODO: window location api를 활용하여 주소의 변경 event를 감지하여 변경된 주소가 라우터 배열에 있는지 확인하고 만약 같은 클래스가 있다면 해당 엘리먼트의 render() 메서드를 실행하여 화면을 업데이트

    this.$target = $target;
    this.render();
    // this.windowEvent();
  }

  render() {
    // TODO: 라우터 감지한 걸 토대로 해당 엘리먼트 랜더링하는 로직

    this.$target.innerHTML = `
    <button class='btn'>Home</button>
    <button class='btn'>Todo</button>
    <button class='btn'>Login</button>
    `;
    let link;
    // TODO: 함수 만들어서 링크 누르면 url pathname변경. 그리고 그에 따라서 렌더링(url.pathname)
    const btns = document.querySelectorAll(".btn");
    console.log(btns);
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log(btn.innerText);
        link = btn.innerText;
        routers.forEach((route) => {
          route.name === link ? route.element.render() : console.log("실패");
        });
      });
    });
    console.log(location.href);
  }
}

new App($appElement);
