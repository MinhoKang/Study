export default class Todo {
  constructor() {
  }
  render() {
    return this.setContent();
  }
  setContent() {
    const content = `<h1>Todo</h1>`;
    console.log('컨텐츠',content)

    console.log("투두");
    return content;

  }
}
