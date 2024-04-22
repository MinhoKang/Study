import css from "../../styles/features/todoPage/todoItem.module.css";

import {
  faCheck,
  faPencil,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export const todoButtons = [
  { index: 0, icon: faCheck, name: "check" },
  { index: 1, className: css.edit, icon: faPencil, name: "edit" },
  { index: 2, icon: faTrashCan, name: "delete" },
];
