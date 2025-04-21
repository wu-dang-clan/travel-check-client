import type { Meta, StoryObj } from "@storybook/react";
import { NumButton } from "@travel-check-client/ui";

const meta = {
  title: "UI/Button/NumButton",
  component: NumButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    number: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof NumButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const one: Story = {
  args: {
    number: "1",
  },
};
export const two: Story = {
  args: {
    number: "2",
  },
};
export const three: Story = {
  args: {
    number: "3",
  },
};
export const four: Story = {
  args: {
    number: "4",
  },
};
export const five: Story = {
  args: {
    number: "5",
  },
};
export const six: Story = {
  args: {
    number: "6",
  },
};
export const seven: Story = {
  args: {
    number: "7",
  },
};
export const eight: Story = {
  args: {
    number: "8",
  },
};
export const nine: Story = {
  args: {
    number: "9",
  },
};
export const zero: Story = {
  args: {
    number: "0",
  },
};

export const WithClickHandler: Story = {
  args: {
    number: "1",
    onClick: () => alert("수정 버튼이 클릭되었습니다!"),
  },
};

export const InteractiveDemo: Story = {
  args: {
    number: "1",
  },
  parameters: {
    docs: {
      description: {
        story: "마우스를 눌렀다 떼면 버튼 이미지가 변경됩니다.",
      },
    },
  },
};
