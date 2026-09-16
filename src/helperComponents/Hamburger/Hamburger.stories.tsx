import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import LiquidGlassPanel from "../LiquidGlassPanel/LiquidGlassPanel";

const meta: Meta<typeof Hamburger> = {
	title: "UI/Hamburger",
	component: Hamburger,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: { type: "range", min: 20, max: 64, step: 2 },
			description: "Width and height of the SVG icon in pixels",
		},
		color: {
			control: "color",
			description: "Inactive stroke color",
		},
		activeColor: {
			control: "color",
			description: "Active / expanded stroke color when morphed into X",
		},
		duration: {
			control: { type: "range", min: 150, max: 800, step: 25 },
			description: "Transition animation duration in milliseconds",
		},
		isOpen: {
			control: "boolean",
			description: "Controlled open state",
		},
		disabled: {
			control: "boolean",
			description: "Disabled state",
		},
		onToggle: { action: "toggled" },
	},
};

export default meta;
type Story = StoryObj<typeof Hamburger>;

export const Default: Story = {
	args: {
		size: 32,
		color: "#ffffff",
		activeColor: "#ffffff",
		duration: 380,
		disabled: false,
	},
};

export const BrandAccent: Story = {
	name: "Signature Golden Accent (#f4bc14)",
	args: {
		size: 36,
		color: "#ffffff",
		activeColor: "#f4bc14",
		duration: 380,
		disabled: false,
	},
};

export const SizeVariants: Story = {
	render: () => {
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "2.5rem",
					padding: "2rem",
					background: "#0e0f14",
					borderRadius: "16px",
					border: "1px solid rgba(255, 255, 255, 0.1)",
				}}
			>
				{[
					{ label: "Small (24px)", size: 24 },
					{ label: "Medium (32px)", size: 32 },
					{ label: "Large (44px)", size: 44 },
					{ label: "XL (56px)", size: 56 },
				].map((item) => (
					<div
						key={item.size}
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "0.75rem",
						}}
					>
						<Hamburger size={item.size} activeColor="#f4bc14" />
						<span
							style={{
								fontSize: "0.75rem",
								color: "rgba(255, 255, 255, 0.6)",
								fontFamily: "Poppins, sans-serif",
							}}
						>
							{item.label}
						</span>
					</div>
				))}
			</div>
		);
	},
};

export const InsideGlassCapsule: Story = {
	name: "Integrated in LiquidGlassPanel",
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div
				style={{
					padding: "3rem",
					background: `
						linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%),
						url("/assets/images/portfolio-background.jpg") center/cover no-repeat
					`,
					borderRadius: "20px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1.5rem",
					fontFamily: "Poppins, sans-serif",
				}}
			>
				<div style={{ color: "#fff", textAlign: "center" }}>
					<h3 style={{ margin: "0 0 0.3rem", fontSize: "1.1rem" }}>
						Integrated Glass Navigation Bar
					</h3>
					<p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
						Click the hamburger to trigger state morphing inside a floating glass capsule
					</p>
				</div>

				<LiquidGlassPanel
					radius={24}
					style={{
						width: "360px",
						padding: "0.75rem 1.25rem",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<span style={{ fontWeight: 800, color: "#fff", fontSize: "1rem" }}>
						Biki Balami
					</span>

					<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
						<span
							style={{
								fontSize: "0.8rem",
								color: isOpen ? "#f4bc14" : "rgba(255,255,255,0.7)",
								fontWeight: 600,
								textTransform: "uppercase",
								letterSpacing: "1px",
							}}
						>
							{isOpen ? "Menu Active" : "Menu Closed"}
						</span>
						<Hamburger
							isOpen={isOpen}
							onToggle={setIsOpen}
							size={30}
							activeColor="#f4bc14"
						/>
					</div>
				</LiquidGlassPanel>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: {
		size: 32,
		disabled: true,
	},
};
