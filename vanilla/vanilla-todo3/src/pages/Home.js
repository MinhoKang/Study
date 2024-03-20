export default class Home {
  constructor($target) {
    this.$target = $target;
    this.render();
  }
  render() {
    const $home = document.createElement("section");
    $home.className = "home";
    $home.innerHTML = `
        <h1>Home</h1>`;
    this.$target.appendChild($home);
  }
}
