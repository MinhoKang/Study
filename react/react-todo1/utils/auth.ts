import account from "../json/account.json" assert { type: "json" };
import LocalStorageAction from "./localStorageAction";

const localStorageAction = new LocalStorageAction();

class Auth {
  async login(id: string, password: string) {
    if (id === account.id && password === account.password) {
      await localStorageAction.storage("set", "isAccept", true);
      await window.history.pushState({}, "", "/todo");
      console.log(window.location.pathname);
      return true;
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      return false;
    }
  }

  async logout() {
    await localStorageAction.storage("set", "isAccept", false);
    await window.history.pushState({}, "", "/home");
  }
}

export default Auth;
