interface TodoItem {
  seq: number;
  content: string;
}

class Store2 {
  observers: Function[];
  todoArr: TodoItem[];

  constructor() {
    this.observers = [];
    this.todoArr = [];
  }

  addObserver(observer: Function) {
    this.observers.push(observer);
  }

  removeObserver(observer: Function) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => {
      observer();
    });
  }

  addTodoItem(todoItem: TodoItem) {
    this.todoArr.push(todoItem);
    this.notifyObservers();
  }

  removeTodoItem(seq: number) {
    this.todoArr = this.todoArr.filter((item) => item.seq !== seq);
    this.notifyObservers();
  }

  getTodoItems(): TodoItem[] {
    return this.todoArr;
  }
}

export const store2 = new Store2();
