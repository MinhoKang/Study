export default class LocalStorageUtil {
  storage(action: string, key: string, value?: boolean) {
    switch (action) {
      case "get":
        return localStorage.getItem(key);
      case "set":
        localStorage.setItem(key, value ? "true" : "false");
        break;
    }
  }
}
