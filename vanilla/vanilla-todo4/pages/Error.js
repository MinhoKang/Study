class Error {
  constructor() {}
  render() {}
  setContent() {
    const content = `<h1>Error</h1>`;
    return content;
  }
}
export const errorPage = new Error();
