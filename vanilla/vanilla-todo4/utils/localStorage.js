export default class LocalStorageUtil {
  storage(action, key, value) {
    switch (action) {
      case "get":
        return localStorage.getItem(key);
      case "set":
        localStorage.setItem(key, value);
        break;
    }
  }
}
