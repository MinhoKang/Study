export default class Error {
  constructor() {}
  render() {
    return this.setContent();
  }
  setContent() {
    const content = `<h1>Error</h1>`;
    return content;
  }
}
