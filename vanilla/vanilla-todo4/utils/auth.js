import account from "../json/account.json" assert { type: "json" };
import LocalStorageUtil from "./localStorage";

const LocalStorageAction = new LocalStorageUtil();

class Auth {
  async logout() {
    await LocalStorageAction.storage("set", "isAccept", false);
    await window.history.pushState({}, "", "/home");
  }

  async login(id, password) {
    if (id === account.id && password === account.password) {
      // new Promise((resolve, reject) => {
      //   resolve();
      // })
      //   .then((response) => {
      //     console.log("asdasd");
      //     LocalStorageAction.storage("set", "isAccept", true);
      //   })
      //   .then((response) => {
      //     console.log("주소변경");
      //     window.history.pushState({}, "", "/todo");
      //   })
      //   .then((response) => {
      //     console.log("렌더");
      //     new Main().render();
      //   })
      //   .catch((error) => {
      //     console.log(new Error());

      //   });
      await LocalStorageAction.storage("set", "isAccept", true);
      await window.history.pushState({}, "", "/todo");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  }
}

export const auth = new Auth();
