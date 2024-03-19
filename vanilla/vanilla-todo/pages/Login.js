// TODO: 홈페이지 엘리먼트 클래스 정의

export class Login {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.path = "/login";
  }
  render() {
    // history.pushState({}, "", this.path);

    this.$target.innerHTML = `
    <div>로그인 페이지입니다.</div>
    `;
  }
}
