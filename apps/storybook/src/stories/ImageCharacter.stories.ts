import type { Meta, StoryObj } from "@storybook/react";
import { ImageCharacter } from "@travel-check-client/ui";

const meta = {
  title: "UI/Image/ImageCharacter",
  component: ImageCharacter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ImageCharacter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
