import "./style.css";
import { Todo } from "./pages/Todo.js";
import { Home } from "./pages/Home.js";
import { Login } from "./pages/Login.js";
import { Main } from "./pages/Main.js";

const $appElement = document.querySelector("#app");

const routers = [
  // TODO: 페이지 라우터 정의;
  {
    path: "/home",
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
  {
    path: "/main",
    name: "Main",
    element: new Main($appElement),
  },
];

class App {
  constructor($target) {
    // TODO: window location api를 활용하여 주소의 변경 event를 감지하여 변경된 주소가 라우터 배열에 있는지 확인하고 만약 같은 클래스가 있다면 해당 엘리먼트의 render() 메서드를 실행하여 화면을 업데이트
    window.addEventListener("popstate", this.render.bind(this));
    this.$target = $target;
    this.render();
  }

  render() {
    // TODO: 라우터 감지한 걸 토대로 해당 엘리먼트 랜더링하는 로직

    this.$target.innerHTML = `
    <button class='btn'>Home</button>
    <button class='btn'>Todo</button>
    <button class='btn'>Login</button>
    <button class='btn'>Main</button>
    `;
    // const routersSelect = () => {
    //   routers.forEach((route) => {
    //     route.path === location.pathname
    //       ? route.element.render()
    //       : console.log("실패");
    //   });
    // };

    let link;
    const btns = document.querySelectorAll(".btn");
    console.log(btns);
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        link = btn.innerText.toLowerCase();
        changeUrl(`/${link}`);
      });
    });
    console.log(location.href);
  }
}

export const changeUrl = (requestedUrl) => {
  // history.pushState를 사용해 url을 변경한다.
  history.pushState(null, null, requestedUrl);

  // routes 배열에서 url에 맞는 컴포넌트를 찾아 main.App에 렌더링 한다.
  const route = routers.find((route) => route.path === requestedUrl);
  route.element.render();
  // routers.forEach((route) => {
  //   route.path === requestedUrl ? route.element.render() : console.log("실패");
  // });
};

window.addEventListener("click", (e) => {
  if (e.target.innerText === "Home") {
    console.log("홈ㅎ모");
    changeUrl("/home");
  } else if (e.target.innerText === "Todo") {
    changeUrl("/todo");
  } else if (e.target.innerText === "Login") {
    changeUrl("/login");
  }
});

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});

new App($appElement);
