import account from "../json/account.json" assert { type: "json" };
import Main from "../main";

export default class Auth {
  isAccept;

  logout() {
    if (localStorage.getItem("isAccept") === "true") {
      const logoutBtn = document.getElementById("logoutBtn");
      logoutBtn.addEventListener("click", () => {
        localStorage.setItem("isAccept", false);
        window.history.pushState({}, "", "/home");
        new Main().render();
      });
    }
  }

  handleSubmit() {
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
              this.isAccept = true;
            })
            .then((response) => {
              localStorage.setItem("isAccept", this.isAccept);
            })
            .then((response) => {
              window.history.pushState({}, "", "/todo");
            })
            .then((response) => {
              new Main().render();
              // new Main().routeTo("/todo");
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
