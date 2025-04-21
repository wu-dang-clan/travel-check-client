import type { Meta, StoryObj } from "@storybook/react";
import { ButtonSm } from "@travel-check-client/ui";

const meta = {
  title: "UI/Button/ButtonSm",
  component: ButtonSm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    item: {
      control: "select",
      options: ["edit", "select", "cancel", "done"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof ButtonSm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Edit: Story = {
  args: {
    item: "edit",
  },
};
export const Delete: Story = {
  args: {
    item: "select",
  },
};
export const Cancel: Story = {
  args: {
    item: "cancel",
  },
};
export const Done: Story = {
  args: {
    item: "done",
  },
};
export const WithClickHandler: Story = {
  args: {
    item: "edit",
    onClick: () => alert("수정 버튼이 클릭되었습니다!"),
  },
};

export const InteractiveDemo: Story = {
  args: {
    item: "edit",
  },
  parameters: {
    docs: {
      description: {
        story: "마우스를 눌렀다 떼면 버튼 이미지가 변경됩니다.",
      },
    },
  },
};
