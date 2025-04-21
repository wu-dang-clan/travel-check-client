import type { Meta, StoryObj } from "@storybook/react";
import { ButtonMed } from "@travel-check-client/ui";

const meta = {
  title: "UI/Button/ButtonMed",
  component: ButtonMed,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["green", "red", "yellow", "blue", "white"],
    },
    children: {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof ButtonMed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    color: "green",
    children: "버튼",
  },
};

export const Red: Story = {
  args: {
    color: "red",
    children: "버튼",
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
    children: "버튼",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
    children: "버튼",
  },
};

export const White: Story = {
  args: {
    color: "white",
    children: "버튼",
  },
};

export const WithClickHandler: Story = {
  args: {
    color: "green",
    children: "버튼",
    onClick: () => alert("버튼이 클릭되었습니다!"),
  },
};

export const InteractiveDemo: Story = {
  args: {
    color: "green",
    children: "버튼",
  },
  parameters: {
    docs: {
      description: {
        story: "마우스를 눌렀다 떼면 버튼 이미지가 변경됩니다.",
      },
    },
  },
};
