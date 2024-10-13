import css from "../../styles/features/todoPage/todoDetail.module.css";

export const todoDetailHeader = [
  {
    index: 0,
    id: "cancel",
    className: css.btn,
    text: "뒤로가기",
    type: "cancle",
  },
  { index: 1, id: "edit", className: css.btn, text: "수정", type: "edit" },
  { index: 2, id: "save", className: css.btn, text: "저장", type: "save" },
];
