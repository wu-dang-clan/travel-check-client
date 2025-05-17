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
      description: "버튼의 색상",
    },
    children: {
      control: "text",
      description: "버튼의 텍스트",
    },
    onClick: {
      action: "clicked",
      description: "클릭 이벤트 핸들러",
    },
    isPressing: {
      control: "boolean",
      description: "버튼의 누름 상태",
    },
  },
} satisfies Meta<typeof ButtonMed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "yellow",
    children: "버튼",
    isPressing: false,
  },
};

export const Pressed: Story = {
  args: {
    color: "yellow",
    children: "버튼",
    isPressing: true,
  },
};

export const InteractiveDemo: Story = {
  args: {
    color: "yellow",
    children: "여행 선택",
    isPressing: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "isPressing이 true일 때는 계속 눌린 상태로 유지됩니다. 일시적인 누름 효과는 마우스 이벤트로 처리됩니다.",
      },
    },
  },
};
