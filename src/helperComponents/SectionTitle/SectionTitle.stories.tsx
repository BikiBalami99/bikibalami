import type { Meta, StoryObj } from "@storybook/react-vite";
import SectionTitle from "./SectionTitle";

const meta: Meta<typeof SectionTitle> = {
	title: "UI/SectionTitle",
	component: SectionTitle,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		speed: {
			control: "select",
			options: ["fast", "normal", "slow"],
		},
		direction: {
			control: "radio",
			options: ["left", "right"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const LeftToRight: Story = {
	args: {
		title: "EXPERIENCE",
		speed: "normal",
		direction: "left",
	},
};

export const RightToLeft: Story = {
	args: {
		title: "FEATURED WORK",
		speed: "slow",
		direction: "right",
	},
};
