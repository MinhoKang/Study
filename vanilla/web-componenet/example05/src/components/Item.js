import Component from "../core/Components";

export default class Item extends Component {
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
        ${items
          .map(
            (item, key) => `<li>${item}
        <button class="deleteBtn" data-index="${key}">삭제</button>
        </li>`
          )
          .join("")}
        </ul>
        <button class='addBtn'>추가</button>
        `;
  }
  setEvent() {
    this.addEvent("click", ".addBtn", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const items = [...this.state.items];
      items.splice(target.dataset.index, 1);
      this.setState({ items });
    });
    // this.$target.addEventListener("click", ({ target }) => {
    //   const items = [...this.state.items];
    //   if (target.classList.contains("addBtn")) {
    //     this.setState({ items: [...items, `item${items.length + 1}`] });
    //   }
    //   if (target.classList.contains("deleteBtn")) {
    //     items.splice(target.dataset.index, 1);
    //     this.setState({ items });
    //   }
    // });
  }
}
