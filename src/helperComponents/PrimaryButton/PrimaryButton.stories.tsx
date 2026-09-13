import type { Meta, StoryObj } from "@storybook/react-vite";
import PrimaryButton from "./PrimaryButton";
import { ExternalLink, Download } from "lucide-react";

const meta: Meta<typeof PrimaryButton> = {
	title: "UI/PrimaryButton",
	component: PrimaryButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		onClick: { action: "clicked" },
		disabled: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
	args: {
		children: "Explore",
		disabled: false,
	},
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<ExternalLink size={18} />
				Visit Project
			</>
		),
		disabled: false,
	},
};

export const LongText: Story = {
	args: {
		children: (
			<>
				<Download size={18} />
				Download Complete Resume
			</>
		),
		disabled: false,
	},
};

export const Disabled: Story = {
	args: {
		children: "Unavailable",
		disabled: true,
	},
};

export const FullViewShowcase: Story = {
	parameters: {
		layout: "fullscreen",
	},
	render: () => (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				background: "#0d0d0d",
				padding: "3rem",
				gap: "2.5rem",
				fontFamily: "Poppins, sans-serif",
			}}
		>
			<div style={{ textAlign: "center" }}>
				<h1 style={{ color: "#ffffff", fontSize: "2rem", marginBottom: "0.5rem" }}>
					PrimaryButton Component
				</h1>
				<p style={{ color: "#8e8e8e", fontSize: "0.95rem" }}>
					Responsive 65ms snap-fade hover ball, zero-rerender performance, flexible flexbox layout, and full WCAG accessibility.
				</p>
			</div>

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "2rem",
					justifyContent: "center",
					alignItems: "center",
					background: "rgba(255, 255, 255, 0.03)",
					border: "1px solid rgba(255, 255, 255, 0.08)",
					borderRadius: "16px",
					padding: "2.5rem 3.5rem",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
					<span style={{ color: "#8e8e8e", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
						Default
					</span>
					<PrimaryButton>Explore</PrimaryButton>
				</div>

				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
					<span style={{ color: "#8e8e8e", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
						With Icon
					</span>
					<PrimaryButton>
						<ExternalLink size={18} />
						Visit Project
					</PrimaryButton>
				</div>

				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
					<span style={{ color: "#8e8e8e", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
						Long Text
					</span>
					<PrimaryButton>
						<Download size={18} />
						Download Complete Resume
					</PrimaryButton>
				</div>

				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
					<span style={{ color: "#8e8e8e", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
						Disabled
					</span>
					<PrimaryButton disabled>Disabled</PrimaryButton>
				</div>
			</div>
		</div>
	),
};
