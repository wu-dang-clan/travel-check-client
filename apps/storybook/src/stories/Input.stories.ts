import type { Meta, StoryObj } from "@storybook/react";
import { InputText } from "@travel-check-client/ui";

const meta = {
  title: "UI/Input/InputText",
  component: InputText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "여행지",
    onChange: (e) => {
      console.log(e.target.value);
    },
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
