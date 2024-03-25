import Header from "./components/Header";
import { routes } from "./routes";
import account from "./json/account.json" assert { type: "json" };

const $app = document.querySelector("#app");

export default class Main {
  isAccept;
  todoArr;
  constructor() {
    window.onpopstate = () => this.render();

    this.isAccept = false;
    localStorage.setItem("isAccept", this.isAccept);
    this.todoArr = [];
  }

  render() {
    $app.innerHTML = "";
    const pathName = window.location.pathname;
    this.routeTo(pathName);
    this.menuClick();
    window.history.pushState({}, "", pathName);
    this.handleSubmit();
    this.logout();
    this.addTodo();
    this.removeTodo();
  }

  routeTo(pathName) {
    const PageComponent = routes[pathName.toLowerCase()];
    if (PageComponent) {
      this.setHeader(new Header().render());
      const page = new PageComponent();
      this.setBody(page);
    } else {
      console.error("Route not found");
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

  handleSubmit() {
    if (window.location.pathname === "/login") {
      const loginBtn = document.getElementById("loginBtn");
      loginBtn.addEventListener("click", async (e) => {
        // 비동기로 이벤트 핸들링
        e.preventDefault();
        const id = document.querySelector("#id").value;
        const password = document.querySelector("#password").value;

        // 아이디와 비밀번호 비교
        if (id === account.id && password === account.password) {
          await new Promise((resolve, reject) => {
            // 비동기 처리를 위한 Promise
            resolve();
          })
            .then((response) => {
              this.isAccept = true;
            })
            .then((response) => {
              localStorage.setItem("isAccept", this.isAccept);
              window.addEventListener("storage", (e) => {
                if (e.key === "isAccept") {
                  console.log("키변경");
                }
              });
            });
          // 로그인 성공 시 경로 변경 및 Todo 페이지 렌더링
          window.history.pushState({}, "", "/todo");
          $app.innerHTML = "";
          // new Header.render();
          this.render();
        } else {
          console.log("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
      });
    }
  }

  logout() {
    if (document.querySelector(".menuItem").innerHTML === "Logout") {
      const logoutBtn = document.getElementById("logoutBtn");
      logoutBtn.addEventListener("click", () => {
        localStorage.setItem("isAccept", false);
        window.history.pushState({}, "", "/home");
        $app.innerHTML = "";
        this.render();
      });
    }
  }

  addTodo() {
    if (
      window.location.pathname === "/todo" &&
      localStorage.getItem("isAccept") === "true"
    ) {
      const todoList = document.getElementById("todoList");
      const todoItem = document.getElementById("todoInput");
      const addBtn = document.getElementById("addBtn");
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const todoListItem = todoItem.value;

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
        this.removeTodo();
        this.renderTodo();
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
        console.log("아이템2", this.todoArr);
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
    todoList.innerHTML = this.todoArr.map((item) => {
      console.log(item);
      console.log(todoList);
      return `<li seq=${item.seq}>${item.content}</li><button class='removeBtn' seq=${item.seq}>삭제</button>`;
    });
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
