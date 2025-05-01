import type { Meta, StoryObj } from "@storybook/react";
import { TitleBox } from "@travel-check-client/ui";

const meta = {
  title: "UI/Box/TitleBox",
  component: TitleBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "타이틀 텍스트",
    },
  },
} satisfies Meta<typeof TitleBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "제목을 입력하세요",
  },
};

export const LongTitle: Story = {
  args: {
    title: "이것은 긴 제목입니다. 타이틀 박스가 어떻게 보이는지 확인해보세요.",
  },
};

export const ShortTitle: Story = {
  args: {
    title: "짧은 제목",
  },
};
