export default class Todo {
  constructor() {}

  render() {
    return this.setContent();
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

    return content;
  }
}
