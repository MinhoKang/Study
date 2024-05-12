import Task from "./Task";

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

export default {
  component: Task,
  title: "Task",
};

const Template = (args: ArgTypes) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  Task: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
      updateAt: new Date(2021, 0, 1, 9, 0),
    },
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
