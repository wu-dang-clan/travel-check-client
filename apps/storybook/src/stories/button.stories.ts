import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@travel-check-client/ui";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "기본 버튼",
  },
};

export const WithoutValue: Story = {
  args: {
    value: undefined,
  },
};

export const LongText: Story = {
  args: {
    value: "긴 텍스트가 있는 버튼입니다",
  },
};
