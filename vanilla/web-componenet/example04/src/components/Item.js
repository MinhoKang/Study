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
  // join() 알아보기
  setEvent() {
    this.$target.querySelector(".addBtn").addEventListener("click", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });

    this.$target.querySelectorAll(".deleteBtn").forEach((btn) =>
      btn.addEventListener("click", ({ target }) => {
        const items = [...this.state.items];
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      })
    );
  }
}
