// TODO: 홈페이지 엘리먼트 클래스 정의

export class Home {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.path = "/home";
  }
  render() {
    console.log(this.path);
    history.pushState({}, "", "/home");

    this.$target.innerHTML = `
        <div>홈페이지</div>
        `;
  }
}
