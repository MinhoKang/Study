import { $app, $body } from "../main";
import LocalStorageUtil from "../utils/localStorage";

const LocalStorageAction = new LocalStorageUtil();

export default class Todo {
  todoArr;
  todoItem;
  addBtn;
  todoList;
  constructor() {
    this.todoArr = [];
  }

  setContent() {
    const content = `<h1>Todo</h1>
    <section>
      <form>
        <input id='todoInput' type='text' placeholder='todo 입력' autofocus='true'/>
        <button id='addBtn'>추가</button>
      </form>
      <ul id='todoList'>
      
      </ul>
    </section>
    `;

    $body.innerHTML = content;
    $app.appendChild($body);
    this.addTodo();
  }

  addTodo() {
    if (
      window.location.pathname === "/todo" &&
      LocalStorageAction.storage("get", "isAccept")
    ) {
      this.todoItem = document.getElementById("todoInput");
      this.addBtn = document.getElementById("addBtn");

      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const todoListItem = this.todoItem.value;
        if (todoListItem) {
          this.todoArr.push({
            seq: this.todoArr.length,
            content: todoListItem,
          });

          this.renderTodo();
        } else {
          alert("내용을 입력하세요");
        }
        this.todoItem.value = "";
      });
    }
  }

  renderTodo() {
    this.todoList = document.getElementById("todoList");
    if (todoList) {
      todoList.innerHTML = this.todoArr
        .map(
          (item) =>
            `<li seq=${item.seq}>${item.content}</li><button class='removeBtn' seq=${item.seq}>삭제</button>`
        )
        .join("");
      this.removeTodo();
    }
  }

  removeTodo() {
    const removeBtns = document.querySelectorAll(".removeBtn");
    removeBtns.forEach((removeBtn) =>
      removeBtn.addEventListener("click", (e) => {
        const seq = e.target.getAttribute("seq");
        const seqNum = parseInt(seq);
        this.todoArr.splice(seqNum, 1);
        for (let i = seqNum; i < this.todoArr.length; i++) {
          this.todoArr[i].seq = i;
        }
        this.renderTodo();
      })
    );
  }
}

export const todoPage = new Todo();
