const $app = document.querySelector("#app");

class Component {
  $target;
  state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  setup() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

class App extends Component {
  constructor($target) {
    super($target);
  }
  setup() {
    this.state = { items: ["item1", "item2", "item3", "item4"] };
  }
  template() {
    const { items } = this.state;
    return `
    <ul>
    ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <button>추가</button>
    `;
  }
  setEvent() {
    this.$target.querySelector("button").addEventListener("click", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

new App(document.querySelector("#app"));
