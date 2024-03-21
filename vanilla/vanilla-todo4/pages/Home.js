export default class Home {
  constructor() {}
  render() {
    return this.setContent();
  }
  setContent() {
    const content = `<h1>Home</h1>`;
    console.log("컨텐츠", content);
    console.log("홈");
    return content;
  }
}
