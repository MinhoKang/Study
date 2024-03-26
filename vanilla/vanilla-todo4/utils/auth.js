import account from "../json/account.json" assert { type: "json" };
import Main from "../main";
import LocalStorageUtil from "./localStorage";

const LocalStorageAction = new LocalStorageUtil();

export default class Auth {
  logout() {
    if (LocalStorageAction.storage("get", "isAccept") === "true") {
      const logoutBtn = document.getElementById("logoutBtn");
      logoutBtn.addEventListener("click", () => {
        LocalStorageAction.storage("set", "isAccept", false);
        window.history.pushState({}, "", "/home");
        new Main().render();
      });
    }
  }

  login() {
    if (window.location.pathname === "/login") {
      const loginBtn = document.getElementById("loginBtn");
      loginBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const id = document.querySelector("#id").value;
        const password = document.querySelector("#password").value;

        if (id === account.id && password === account.password) {
          await new Promise((resolve, reject) => {
            resolve();
          })
            .then((response) => {
              console.log("asdasd");
              LocalStorageAction.storage("set", "isAccept", true);
            })
            .then((response) => {
              window.history.pushState({}, "", "/todo");
            })
            .then((response) => {
              new Main().render();
            })
            .catch((error) => {
              console.log(new Error());
            });
        } else {
          alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
      });
    }
  }
}
