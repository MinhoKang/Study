interface TodoItem {
  seq: number;
  content: string;
}

export class Store2 {
  observers: any[];
  todoArr: TodoItem[];

  constructor() {
    this.observers = [];
    this.todoArr = [];
  }

  addObserver(observer: any) {
    this.observers.push(observer);
  }

  removeObserver(observer: Function) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => {
      console.log(observer);
      observer.render();
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
