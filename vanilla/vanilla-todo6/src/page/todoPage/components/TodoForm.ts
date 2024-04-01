import { Store } from "../../../store/store";

export class TodoForm {
  store: Store;
  $section: HTMLElement;
  $form: HTMLFormElement;

  constructor(store: Store, $sectoion: HTMLElement) {
    this.store = store;
    this.$section = $sectoion;
    this.$form = document.createElement("form");
    this.$form.addEventListener("click", this.add.bind(this));

    // TODO: Form 이벤트로 리팩토링, 클래스명 바꾸기
  }

  returnContent() {
    const content = `<h1>Todo</h1>`;
    this.$section.innerHTML = content;
    this.$form.innerHTML = `
    <input id='todoInput' type='text' placeholder='todo 입력' autofocus='true'/>
    <button id='addBtn' type='submit'>추가</button>
    `;
    this.$section.appendChild(this.$form);
  }

  add(e: Event) {
    e.preventDefault();

    if (
      !e.target ||
      !(e.target instanceof HTMLElement) ||
      !(e.target.tagName === "BUTTON")
    )
      return;

    const todoInput: HTMLInputElement =
      this.$section.querySelector("#todoInput")!;

    if (!todoInput.value) {
      alert("내용을 입력하세요");
      return;
    }

    this.store.addTodoItem({
      seq: this.store.todoArr.length,
      content: todoInput.value,
    });
    todoInput.value = "";
  }

  // addTodo() {
  //   const addBtn = this.$section.querySelector("#addBtn");
  //   const todoInput: HTMLInputElement =
  //     this.$section.querySelector("#todoInput")!;

  //   if (!addBtn || !todoInput) return;

  //   addBtn.addEventListener("click", (e: Event) => {
  //     e.preventDefault();
  //     if (!todoInput.value) {
  //       alert("내용을 입력하세요");
  //       return;
  //     }
  //     this.store.addTodoItem({
  //       seq: this.store.todoArr.length,
  //       content: todoInput.value,
  //     });
  //     todoInput.value = "";
  //   });
  // }
}
