import Modal from "@/components/modal";
import TodoPage from "@/app/todo/[id]/page";

const Page = (props: any) => {
  return (
    <Modal>
      <TodoPage {...props} />
    </Modal>
  );
};

export default Page;
