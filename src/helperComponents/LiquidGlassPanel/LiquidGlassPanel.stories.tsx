import type { Meta, StoryObj } from "@storybook/react-vite";
import LiquidGlassPanel from "./LiquidGlassPanel";

const meta: Meta<typeof LiquidGlassPanel> = {
	title: "UI/LiquidGlassPanel",
	component: LiquidGlassPanel,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		strength: { control: { type: "range", min: 50, max: 500, step: 10 } },
		depth: { control: { type: "range", min: 2, max: 40, step: 2 } },
		radius: { control: { type: "range", min: 0, max: 32, step: 2 } },
		chromaticAberration: { control: { type: "range", min: 0, max: 50, step: 2 } },
	},
};

export default meta;
type Story = StoryObj<typeof LiquidGlassPanel>;

export const Default: Story = {
	render: (args) => (
		<div
			style={{
				padding: "4rem",
				background: "linear-gradient(135deg, #1f1c2c, #928dab, #f4a914)",
				borderRadius: "20px",
			}}
		>
			<LiquidGlassPanel
				{...args}
				style={{
					padding: "2rem 3rem",
					minWidth: "320px",
					textAlign: "center",
				}}
			>
				<h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Liquid Glass Effect</h3>
				<p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem" }}>
					Refractive glassmorphic backdrop filter with dynamic distortion map.
				</p>
			</LiquidGlassPanel>
		</div>
	),
	args: {
		strength: 220,
		depth: 18,
		radius: 16,
		chromaticAberration: 6,
	},
};
