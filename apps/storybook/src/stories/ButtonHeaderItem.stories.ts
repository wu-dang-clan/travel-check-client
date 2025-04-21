import type { Meta, StoryObj } from "@storybook/react";
import { ButtonHeaderItem } from "@travel-check-client/ui";

const meta = {
  title: "UI/Button/ButtonHeaderItem",
  component: ButtonHeaderItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    item: {
      control: "select",
      options: ["home", "people", "delete"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof ButtonHeaderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    item: "home",
  },
};
export const People: Story = {
  args: {
    item: "people",
  },
};
export const Delete: Story = {
  args: {
    item: "delete",
  },
};
export const WithClickHandler: Story = {
  args: {
    item: "home",
    onClick: () => alert("시작 버튼이 클릭되었습니다!"),
  },
};

export const InteractiveDemo: Story = {
  args: {
    item: "home",
  },
  parameters: {
    docs: {
      description: {
        story: "마우스를 눌렀다 떼면 버튼 이미지가 변경됩니다.",
      },
    },
  },
};
