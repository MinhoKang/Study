export class Main {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.path = "/main";
  }

  render() {
    this.$target.innerHTML = `
    <div>메인 페이지입니다.</div>
    `;
  }
}
