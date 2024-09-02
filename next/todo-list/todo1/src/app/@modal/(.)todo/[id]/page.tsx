import { TodoInfo } from "@/components/todoInfo";
import style from "./page.module.css";
import Modal from "@/components/modal";

const Page = (props: any) => {
  const { id } = props.params;

  return (
    <aside className={style.container}>
      <Modal>
        <TodoInfo id={id} />
      </Modal>
    </aside>
  );
};

export default Page;
