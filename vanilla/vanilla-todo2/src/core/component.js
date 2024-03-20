import router from "../routes/router";

export class Component {
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
    this.setPathname();
    this.getPathname();
  }

  setup() {}
  render() {
    // this.$target.innerHTML = this.template();
    this.$target.innerHTML = this.template();
  }
  setPathname() {
    // window.history.pushState({}, "", this.$target.dataset.path);
    const path = window.location.pathname;
    console.log("path", path);

    history.pushState({ path }, "", path);
  }
  getPathname() {
    router.forEach((route) => {
      if (route.path === window.location.pathname.toLowerCase()) {
        console.log(route.path);
        console.log(route.name);
        console.log(route.element);
        route.element.render();
      }
    });
  }
  template() {
    return "";
  }
}
