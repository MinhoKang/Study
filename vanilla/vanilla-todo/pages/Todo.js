// TODO: 투두 클래스 정의

export class Todo {
  constructor($target) {
    this.$target = $target;
    this.render();
    this.path = "/todo";
  }

  render() {
    console.log(this.path);
    history.pushState({}, "", "/todo");

    this.$target.innerHTML = `
        <div>투두앱니다</div>
        `;
  }
}
