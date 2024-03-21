export default class Home {
  constructor($target) {
    this.$target = $target;
  }
  render() {
    this.setContent();
  }
  setContent() {
    this.$target.innerHTML = `<h1>Home</h1>`;
    console.log('홈')
  }
}
