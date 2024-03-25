import Header from "./components/Header";
import { routes } from "./routes";
import Auth from "./utils/auth";

const $app = document.querySelector("#app");
const login = new Auth();

export default class Main {
  isAccept;
  todoArr;
  constructor() {
    window.onpopstate = () => this.render();
    this.isAccept = localStorage.getItem("isAccept") === "true";
    localStorage.setItem("isAccept", this.isAccept);
    this.todoArr = [];
  }

  render() {
    $app.innerHTML = "";
    const pathName = window.location.pathname;
    this.routeTo(pathName);
    this.menuClick();
    // window.history.pushState({}, "", pathName);
    login.handleSubmit();
    this.logout();
    this.addTodo();
    // this.removeTodo();
  }

  routeTo(pathName) {
    const PageComponent = routes[pathName.toLowerCase()];
    if (PageComponent) {
      this.setHeader(new Header().render());
      const page = new PageComponent();
      this.setBody(page);
    } else {
      console.error("페이지가 없습니다");
    }
  }

  setHeader(page) {
    const $header = document.createElement("header");
    $header.innerHTML = page;
    $app.appendChild($header);
  }

  setBody(page) {
    const $body = document.createElement("main");
    $body.innerHTML = page.render();
    $app.appendChild($body);
  }

  menuClick() {
    const header = new Header();
    header.changePathname();
  }

  logout() {
    if (localStorage.getItem("isAccept") === "true") {
      const logoutBtn = document.getElementById("logoutBtn");
      logoutBtn.addEventListener("click", () => {
        localStorage.setItem("isAccept", false);
        window.history.pushState({}, "", "/home");
        this.render();
      });
    }
  }

  addTodo() {
    if (
      window.location.pathname === "/todo" &&
      localStorage.getItem("isAccept") === "true"
    ) {
      const todoItem = document.getElementById("todoInput");
      const addBtn = document.getElementById("addBtn");
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const todoListItem = todoItem.value;
        if (todoListItem) {
          // const content = `<li seq='${this.todoArr.length}'>${todoListItem}</li> <button id='deleteBtn'>삭제</button>`;
          // this.todoArr = [
          //   ...this.todoArr,
          //   { seq: this.todoArr.length, content: todoListItem },
          // ];
          this.todoArr.push({
            seq: this.todoArr.length,
            content: todoListItem,
          });
          // console.log(content);

          // todoList.innerHTML = this.todoArr.map((item) => {
          //   return `<li seq=${item.seq}>${item.content}</li><button class='removeBtn' seq=${item.seq}>삭제</button>`;
          // });
          todoItem.value = "";
          this.renderTodo();
          // this.removeTodo(); //?
        } else {
          alert("내용을 입력하세요");
        }
      });
    }
  }
  removeTodo() {
    const removeBtns = document.querySelectorAll(".removeBtn");
    removeBtns.forEach((removeBtn) =>
      removeBtn.addEventListener("click", (e) => {
        // const items = [...this.todoArr];
        console.log("아이템", this.todoArr);
        const seq = e.target.getAttribute("seq");
        const seqNum = parseInt(seq);
        this.todoArr.splice(seqNum, 1);
        for (let i = seqNum; i < this.todoArr.length; i++) {
          this.todoArr[i].seq = i;
        }
        this.renderTodo();
      })
    );
  }

  renderTodo() {
    console.log("렌더전");
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = this.todoArr
      .map((item) => {
        console.log(item);
        console.log(todoList);
        return `<li seq=${item.seq}>${item.content}</li><button class='removeBtn' seq=${item.seq}>삭제</button>`;
      })
      .join("");
    console.log("렌더후");
    this.removeTodo();
  }
}

new Main().render();

// 로그인 구현
// TODO: 로그인 FORM을 구현하고 유저가 입력한 값을 상태를 관리하여,
// 유저가 입력한 값을 API를 요청한다.
// EX) HANDLEsUBMIT() 이 함수가 PROMISE를 반환하는 비동기 방식으로 구현

// 인자를 숫자를 받아서 2의 배수면 TRUE를 비동기로 리턴하는 함수를 작성하라.

// 1. 일단 돌아가게 만든다.
// 2. 잘 동작하게 만든다.
// 3. 빠르게 동작하게 만든다.

// 1. 역할별로 분리
// 재사용성, 명확성, 가독성,

// 로그인이라는 클래스는 무슨 역할을 하는가?
// -> 로그인 관련 모든 것을 담당
// -> 로컬스토리지 관련 유틸을 만들던
// -> 상태값에 고민을 해보고
// isLogin
