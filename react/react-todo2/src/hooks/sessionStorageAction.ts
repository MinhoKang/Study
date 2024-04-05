class SessionStorageAction {
  storage(action: string, key: string, value?: string) {
    switch (action) {
      case "get":
        return sessionStorage.getItem(key);
      case "set":
        if (!value) return;
        sessionStorage.setItem(key, value);
        break;
    }
  }
}

export const sessionStorageAction = new SessionStorageAction();
