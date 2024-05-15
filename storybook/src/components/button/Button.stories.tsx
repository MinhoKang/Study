import Center from "../center/Center";
import Button from "./Button";
import { Meta } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
  //   args: {
  //     children: "Primary Args",
  //   },
  decorators: [(Story) => <Center>{Story()}</Center>],
} as Meta;

interface StoryArgs {
  variant: string;
  children: string;
}

// 방법 1: 깔끔하다
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => (
  <Center>
    <Button variant="secondary">Secondary</Button>
  </Center>
);
export const Success = () => (
  <Center>
    <Button variant="success">Success</Button>
  </Center>
);
export const Danger = () => (
  <Center>
    <Button variant="danger">Danger</Button>
  </Center>
);

// 방법 2: 코드 재사용 가능
const Template = (args: StoryArgs) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Pimary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
