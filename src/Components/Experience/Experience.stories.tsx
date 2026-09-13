import type { Meta, StoryObj } from "@storybook/react-vite";
import Experience from "./Experience";

const meta: Meta<typeof Experience> = {
	title: "Sections/Experience",
	component: Experience,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Experience>;

export const Default: Story = {};
