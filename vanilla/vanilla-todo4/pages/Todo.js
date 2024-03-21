export default class Todo {
  constructor($target) {
    this.$target = $target;
  }
  render() {
    this.setContent();
  }
  setContent() {
    this.$target.innerHTML = `<h1>Todo</h1>`;
    console.log("투두");
  }
}
