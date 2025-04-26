import type { Meta, StoryObj } from "@storybook/react";
import { InputPin } from "@travel-check-client/ui";

const meta = {
  title: "UI/Input/InputPin",
  component: InputPin,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputPin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
  },
};

export const WithCallback: Story = {
  args: {
    onChange: (value) => console.log("입력된 PIN:", value),
  },
  parameters: {
    docs: {
      description: {
        story: "onChange 콜백을 통해 입력값을 실시간으로 확인할 수 있습니다.",
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    maxLength: 6,
  },
  parameters: {
    docs: {
      description: {
        story: "숫자를 입력하면 보라색 밑줄이 표시됩니다.",
      },
    },
  },
};
