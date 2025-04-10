import type { Meta, StoryObj } from "@storybook/react";
import { StartButton } from "@travel-check-client/ui";

const meta = {
  title: "UI/StartButton",
  component: StartButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof StartButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithClickHandler: Story = {
  args: {
    onClick: () => alert("시작 버튼이 클릭되었습니다!"),
  },
};

export const InteractiveDemo: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "마우스를 눌렀다 떼면 버튼 이미지가 변경됩니다.",
      },
    },
  },
};
