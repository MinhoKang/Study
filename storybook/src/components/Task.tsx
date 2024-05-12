interface ArgTypes {
  task: {
    id: string;
    title: string;
    state: string;
    updateAt: Date;
  };
  onArchiveTask?: any;
  onPinTask?: any;
}

const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: ArgTypes) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};

export default Task;
