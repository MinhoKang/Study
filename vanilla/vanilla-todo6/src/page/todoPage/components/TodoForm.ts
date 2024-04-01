import { Store } from "../../../store/store";

export class TodoForm {
  store: Store;
  $section: HTMLElement;
  $form: HTMLFormElement;
  $notice: HTMLElement;
  todoValue: string;

  constructor(store: Store, $sectoion: HTMLElement) {
    this.store = store;
    this.$section = $sectoion;
    this.$form = document.createElement("form");
    this.$form.addEventListener("click", this.add.bind(this));
    this.$form.addEventListener("input", this.handleNotice.bind(this));
    this.$notice = document.createElement("p");
    this.$notice.innerHTML = `5글자 이상 입력하세요`;
    this.todoValue = "";
  }

  add(e: Event) {
    e.preventDefault();

    if (
      !e.target ||
      !(e.target instanceof HTMLElement) ||
      !(e.target.tagName === "BUTTON")
    )
      return;

    if (!this.todoValue.length) {
      alert("내용을 입력하세요");
      return;
    }

    this.store.addTodoItem({
      seq: this.store.todoArr.length,
      content: this.todoValue,
    });
    this.todoValue = "";
  }

  handleNotice(e: Event) {
    const { value } = e.target as any;
    this.todoValue = value;

    if (value.length < 5) {
      this.$form.appendChild(this.$notice);
    } else if (this.$form.contains(this.$notice)) {
      this.$form.removeChild(this.$notice);
    }
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
}
