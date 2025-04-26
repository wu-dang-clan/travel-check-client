import type { Meta, StoryObj } from "@storybook/react";
import { ImageTypoLogo } from "@travel-check-client/ui";

const meta = {
  title: "UI/Image/ImageTypoLogo",
  component: ImageTypoLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ImageTypoLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
