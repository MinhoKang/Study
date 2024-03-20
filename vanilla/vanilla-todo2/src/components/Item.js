import Component from "../core/Components";

export default class Item extends Component {
  constructor($target) {
    super($target);
  }
  get filteredItems() {
    const { isFilter, items } = this.state;
    return items.filter(
      ({ active }) =>
        (isFilter === 1 && active) ||
        (isFilter === 2 && !active) ||
        isFilter === 0
    );
  }
  setup() {
    this.state = {
      isFilter: 0,
      items: [
        {
          seq: 1,
          contents: "item1",
          active: false,
        },
        {
          seq: 2,
          contents: "item2",
          active: true,
        },
      ],
    };
  }
  template() {
    const { items } = this.state;
    return `
    <header>
    <input type="text" class="appender" palceholder='내용입력'/></header>
     <main>
        <ul>
        ${this.filteredItems
          .map(
            ({ contents, active, seq }) => `<li data-seq="${seq}">${contents}
            <button class="toggleBtn" style="color: ${
              active ? "#09F" : "#F09"
            }">
            ${active ? "활성" : "비활성"}
        <button class="deleteBtn">삭제</button>
         </li>`
          )
          .join("")}
        </ul>
      </main>
      <footer>
        <button class="filterBtn" data-is-filter="0">전체 보기</button>
        <button class="filterBtn" data-is-filter="1">활성 보기</button>
        <button class="filterBtn" data-is-filter="2">비활성 보기</button>
      </footer>
        `;
  }
  setEvent() {
    this.addEvent("keyup", ".appender", ({ target, key }) => {
      const items = [...this.state.items];
      const seq = Math.max(0, ...items.map((v) => v.seq)) + 1;
      const contents = target.value;
      const active = false;
      this.setState({
        items: [...items, { seq, contents, active }],
      });
    });

    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const items = [...this.state.items];
      const seq = Number(target.closest("[data-seq]").dataset.seq);
      items.splice(
        items.findIndex((v) => v.seq === seq),
        1
      );
      this.setState({ items });
    });

    this.addEvent("click", ".toggleBtn", ({ target }) => {
      const items = [...this.state.items];
      const seq = Number(target.closest("[data-seq]").dataset.seq);
      const index = items.findIndex((v) => v.seq === seq);
      items[index].active = !items[index].active;
      this.setState({ items });
    });

    this.addEvent("click", ".filterBtn", ({ target }) => {
      this.setState({ isFilter: Number(target.dataset.isFilter) });
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
