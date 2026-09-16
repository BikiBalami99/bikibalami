import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import LiquidGlassPanel from "./LiquidGlassPanel";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
	Activity,
	ArrowUpRight,
	Code2,
	Compass,
	ExternalLink,
	Layers,
	Shield,
	Sliders,
	Sparkles,
	Zap,
} from "lucide-react";

const meta: Meta<typeof LiquidGlassPanel> = {
	title: "UI/LiquidGlassPanel",
	component: LiquidGlassPanel,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		strength: {
			control: { type: "range", min: 50, max: 500, step: 10 },
			description: "Refractive displacement map scale / intensity",
		},
		depth: {
			control: { type: "range", min: 2, max: 40, step: 2 },
			description: "Depth border width of the refractive liquid bevel",
		},
		radius: {
			control: { type: "range", min: 0, max: 40, step: 2 },
			description: "Border radius in pixels for both DOM element and SVG displacement map",
		},
		chromaticAberration: {
			control: { type: "range", min: 0, max: 30, step: 1 },
			description: "RGB channel separation offset creating rainbow prism color fringing",
		},
		tint: {
			control: "text",
			description: "Custom background tint color or gradient (e.g. rgba(0, 2, 7, 0.32))",
		},
		glassBorder: {
			control: "boolean",
			description: "Toggle specular highlight top border and glass drop shadow",
		},
	},
};

export default meta;
type Story = StoryObj<typeof LiquidGlassPanel>;

/**
 * Story 1: Recreates the exact Hero Section refraction from screenshot 1.
 * The floating navbar capsule sits right across the bold yellow typography
 * ("FULL STACK DEVELOPER / UI/UX DESIGNER") and portrait photo, demonstrating
 * intense edge refraction, distortion waves, and chromatic aberration.
 */
export const HeroRefractionPlayground: Story = {
	name: "1. Hero Section Refraction (Screenshot 1)",
	render: (args) => {
		const [verticalPos, setVerticalPos] = useState<number>(38);

		return (
			<div
				style={{
					minHeight: "100vh",
					background: "#0a0a0c",
					padding: "2rem",
					display: "flex",
					flexDirection: "column",
					gap: "1.5rem",
					fontFamily: "Poppins, sans-serif",
					color: "#ffffff",
				}}
			>
				{/* Top Control Bar */}
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "1rem",
						background: "rgba(255, 255, 255, 0.04)",
						border: "1px solid rgba(255, 255, 255, 0.08)",
						borderRadius: "14px",
						padding: "0.85rem 1.5rem",
					}}
				>
					<div>
						<h2 style={{ fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>
							Hero Refraction Playground (Screenshot 1 Recreation)
						</h2>
						<p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem", color: "#a0a0a0" }}>
							Liquid glass distortion over high-contrast yellow typography and portrait photograph.
						</p>
					</div>

					<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
						<label style={{ fontSize: "0.85rem", color: "#ccc", display: "flex", alignItems: "center", gap: "0.5rem" }}>
							Vertical Position:
							<input
								type="range"
								min="15"
								max="70"
								value={verticalPos}
								onChange={(e) => setVerticalPos(Number(e.target.value))}
								style={{ width: "140px", cursor: "pointer" }}
							/>
							<span style={{ minWidth: "35px", fontSize: "0.8rem", color: "#f4bc14" }}>{verticalPos}%</span>
						</label>
						<button
							onClick={() => setVerticalPos(38)}
							style={{
								background: "rgba(255, 255, 255, 0.1)",
								border: "1px solid rgba(255, 255, 255, 0.2)",
								color: "#fff",
								padding: "0.35rem 0.85rem",
								borderRadius: "8px",
								fontSize: "0.8rem",
								cursor: "pointer",
							}}
						>
							Reset Position
						</button>
					</div>
				</div>

				{/* Hero Stage matching Screenshot 1 */}
				<div
					style={{
						position: "relative",
						height: "560px",
						borderRadius: "20px",
						overflow: "hidden",
						border: "1px solid rgba(255, 255, 255, 0.12)",
						boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
						background: `
							linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.75) 100%),
							url("/assets/images/portfolio-background.jpg") center/cover no-repeat
						`,
					}}
				>
					{/* Underneath Hero Content: High contrast text & details */}
					<div
						style={{
							position: "absolute",
							inset: 0,
							padding: "3.5rem 3rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							pointerEvents: "none",
							userSelect: "none",
						}}
					>
						<div style={{ maxWidth: "800px" }}>
							<h3
								style={{
									fontSize: "1.4rem",
									margin: "0 0 0.2rem",
									fontWeight: 600,
									letterSpacing: "0.5px",
									textShadow: "0 2px 10px rgba(0,0,0,0.8)",
								}}
							>
								Biki Balami
							</h3>
							<h1
								style={{
									fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
									lineHeight: 1.05,
									fontWeight: 900,
									color: "#f4bc14",
									margin: "0 0 0.2rem",
									letterSpacing: "-0.5px",
									textShadow: "0 3px 15px rgba(0,0,0,0.9)",
								}}
							>
								FULL-STACK DEVELOPER
							</h1>
							<h1
								style={{
									fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
									lineHeight: 1.05,
									fontWeight: 900,
									color: "#f4bc14",
									margin: "0 0 1rem",
									letterSpacing: "-0.5px",
									textShadow: "0 3px 15px rgba(0,0,0,0.9)",
								}}
							>
								UI/UX DESIGNER
							</h1>
							<p
								style={{
									fontSize: "1rem",
									color: "#e0e0e0",
									margin: "0 0 0.4rem",
									fontWeight: 400,
									textShadow: "0 2px 8px rgba(0,0,0,0.9)",
								}}
							>
								bikibalami1999@gmail.com
							</p>
							<p
								style={{
									fontSize: "0.95rem",
									color: "#f4bc14",
									margin: "0 0 0.5rem",
									fontWeight: 500,
									textShadow: "0 2px 8px rgba(0,0,0,0.9)",
								}}
							>
								Next.js 13+ | TypeScript | AWS
							</p>
							<p
								style={{
									fontSize: "0.75rem",
									color: "#888888",
									margin: 0,
								}}
							>
								(Scroll Down)
							</p>
						</div>

						{/* Right Bottom Widgets */}
						<div
							style={{
								position: "absolute",
								right: "3rem",
								bottom: "3rem",
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								gap: "1rem",
								pointerEvents: "auto",
							}}
						>
							<div style={{ display: "flex", gap: "0.75rem" }}>
								<div
									style={{
										width: "2.4rem",
										height: "2.4rem",
										borderRadius: "8px",
										border: "1px solid #f4bc14",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: "rgba(0,0,0,0.6)",
									}}
								>
									<img src="/assets/images/linkedinLogo.png" alt="LinkedIn" style={{ width: "1.4rem" }} />
								</div>
								<div
									style={{
										width: "2.4rem",
										height: "2.4rem",
										borderRadius: "8px",
										border: "1px solid #f4bc14",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										background: "rgba(0,0,0,0.6)",
									}}
								>
									<img src="/assets/images/githubLogo.png" alt="GitHub" style={{ width: "1.4rem" }} />
								</div>
							</div>
							<PrimaryButton buttonModifierClass={{ minWidth: "160px" }}>
								Resume
							</PrimaryButton>
						</div>
					</div>

					{/* The Floating LiquidGlassPanel Navbar Capsule */}
					<div
						style={{
							position: "absolute",
							top: `${verticalPos}%`,
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: "min(94%, 1120px)",
							transition: "top 120ms ease-out",
							zIndex: 10,
						}}
					>
						<LiquidGlassPanel
							{...args}
							style={{
								width: "100%",
								height: "60px",
								padding: "0 1.5rem",
								alignItems: "center",
								justifyContent: "space-between",
								borderRadius: `${args.radius ?? 16}px`,
							}}
						>
							{/* Left Brand */}
							<div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
								<span
									style={{
										fontSize: "1.1rem",
										fontWeight: 800,
										letterSpacing: "0.5px",
										color: "#ffffff",
										whiteSpace: "nowrap",
									}}
								>
									Biki Balami
								</span>
							</div>

							{/* Right Navigation Links & Primary Button */}
							<div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
								<nav style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
									<a
										href="#home"
										onClick={(e) => e.preventDefault()}
										style={{ color: "#ffffff", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}
									>
										Home
									</a>
									<a
										href="#skills"
										onClick={(e) => e.preventDefault()}
										style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}
									>
										Skills
									</a>
									<a
										href="#projects"
										onClick={(e) => e.preventDefault()}
										style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}
									>
										Projects
									</a>
									<a
										href="#art"
										onClick={(e) => e.preventDefault()}
										style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}
									>
										Art
									</a>
								</nav>

								<PrimaryButton
									buttonModifierClass={{
										height: "2.4rem",
										padding: "0.2rem 1.4rem",
									}}
								>
									Let's Talk
								</PrimaryButton>
							</div>
						</LiquidGlassPanel>
					</div>
				</div>
			</div>
		);
	},
	args: {
		strength: 230,
		depth: 18,
		radius: 16,
		chromaticAberration: 5,
		tint: "rgba(0, 2, 7, 0.35)",
		glassBorder: true,
	},
};

/**
 * Story 2: Recreates the exact Skills Marquee refraction from screenshot 2.
 * The floating glass navbar capsule sits over the infinite-scrolling marquee
 * of giant bold "SKILLS" text. As the letters glide underneath, they ripple
 * with fluid dynamic refraction and chromatic color fringing!
 */
export const SkillsMarqueeRefraction: Story = {
	name: "2. Skills Infinite Marquee Refraction (Screenshot 2)",
	render: (args) => {
		return (
			<div
				style={{
					minHeight: "100vh",
					background: "#0d0e12",
					padding: "2rem",
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					fontFamily: "Poppins, sans-serif",
					color: "#ffffff",
				}}
			>
				{/* Header Info */}
				<div
					style={{
						background: "rgba(255, 255, 255, 0.04)",
						border: "1px solid rgba(255, 255, 255, 0.08)",
						borderRadius: "14px",
						padding: "1rem 1.5rem",
					}}
				>
					<h2 style={{ fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>
						Skills Marquee Refraction (Screenshot 2 Recreation)
					</h2>
					<p style={{ margin: "0.3rem 0 0", fontSize: "0.85rem", color: "#a0a0a0" }}>
						Real infinite-scrolling text moving behind the liquid glass capsule. Notice the dynamic wavy refraction through the glass as the letters move!
					</p>
				</div>

				{/* Skills Section Stage */}
				<div
					style={{
						position: "relative",
						background: "#f0f0f2",
						borderRadius: "20px",
						padding: "4rem 0 3rem",
						overflow: "hidden",
						boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
					}}
				>
					{/* Infinite Scrolling Marquee ("SKILLS") */}
					<div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
						<SectionTitle title="SKILLS" speed="normal" direction="left" />
					</div>

					{/* Dark Technical Arsenal Card Below Marquee */}
					<div
						style={{
							margin: "2rem 2rem 0",
							background: "#08080a",
							borderRadius: "18px",
							border: "1px solid rgba(255, 255, 255, 0.1)",
							padding: "2.5rem",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "1.5rem",
							boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
						}}
					>
						<h3
							style={{
								fontSize: "2rem",
								fontWeight: 800,
								margin: 0,
								color: "#ffffff",
								textAlign: "center",
							}}
						>
							My Technical Arsenal
						</h3>

						{/* Category Tabs */}
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "0.75rem",
								justifyContent: "center",
							}}
						>
							{["Frontend", "Backend", "DevOps", "Tools", "Comp Sci"].map((tab, idx) => (
								<button
									key={tab}
									style={{
										background: idx === 0 ? "#f4bc14" : "rgba(255,255,255,0.06)",
										color: idx === 0 ? "#000000" : "#ffffff",
										border: "none",
										padding: "0.5rem 1.4rem",
										borderRadius: "999px",
										fontWeight: 600,
										fontSize: "0.9rem",
										cursor: "pointer",
									}}
								>
									{tab}
								</button>
							))}
						</div>
					</div>

					{/* The Floating LiquidGlassPanel Navbar Capsule positioned over the Marquee */}
					<div
						style={{
							position: "absolute",
							top: "5.5rem",
							left: "50%",
							transform: "translateX(-50%)",
							width: "min(92%, 1080px)",
							zIndex: 20,
						}}
					>
						<LiquidGlassPanel
							{...args}
							style={{
								width: "100%",
								height: "60px",
								padding: "0 1.5rem",
								alignItems: "center",
								justifyContent: "space-between",
								borderRadius: `${args.radius ?? 16}px`,
							}}
						>
							{/* Left Brand */}
							<div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
								<span
									style={{
										fontSize: "1.1rem",
										fontWeight: 800,
										letterSpacing: "0.5px",
										color: "#ffffff",
										whiteSpace: "nowrap",
									}}
								>
									Biki Balami
								</span>
							</div>

							{/* Right Navigation Links & Primary Button */}
							<div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
								<nav style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
									<a
										href="#home"
										onClick={(e) => e.preventDefault()}
										style={{ color: "#ffffff", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}
									>
										Home
									</a>
									<a
										href="#skills"
										onClick={(e) => e.preventDefault()}
										style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}
									>
										Skills
									</a>
									<a
										href="#projects"
										onClick={(e) => e.preventDefault()}
										style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}
									>
										Projects
									</a>
									<a
										href="#art"
										onClick={(e) => e.preventDefault()}
										style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}
									>
										Art
									</a>
								</nav>

								<PrimaryButton
									buttonModifierClass={{
										height: "2.4rem",
										padding: "0.2rem 1.4rem",
									}}
								>
									Let's Talk
								</PrimaryButton>
							</div>
						</LiquidGlassPanel>
					</div>
				</div>
			</div>
		);
	},
	args: {
		strength: 230,
		depth: 18,
		radius: 16,
		chromaticAberration: 5,
		tint: "rgba(0, 2, 7, 0.35)",
		glassBorder: true,
	},
};

/**
 * Story 3: Multi-Size Component Showcase.
 * Directly fulfills the core architectural goal: "the goal of the component
 * is to act as a background for many sizes of components, so it will be used
 * instead of a background color perhaps."
 *
 * Demonstrates LiquidGlassPanel as the background container for:
 * 1. Horizontal Navbar Capsule (wide pill)
 * 2. Feature / Project Card (medium vertical card)
 * 3. Performance / Stats Metric Tile (compact square)
 * 4. Micro Status Chip / Pill (compact badge)
 * 5. Interactive Floating Action Bar (dock)
 * 6. Modal / Dialog Surface (large card)
 */
export const MultiSizeComponentShowcase: Story = {
	name: "3. Multi-Size Component Showcase (Universal Background)",
	render: (args) => {
		const [bgTheme, setBgTheme] = useState<"poster" | "photo" | "abstract">("poster");

		return (
			<div
				style={{
					minHeight: "100vh",
					background: "#08080a",
					padding: "2rem",
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					fontFamily: "Poppins, sans-serif",
					color: "#ffffff",
				}}
			>
				{/* Control Header */}
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "1rem",
						background: "rgba(255, 255, 255, 0.04)",
						border: "1px solid rgba(255, 255, 255, 0.08)",
						borderRadius: "14px",
						padding: "1rem 1.5rem",
					}}
				>
					<div>
						<h2 style={{ fontSize: "1.25rem", margin: 0, fontWeight: 700 }}>
							LiquidGlassPanel as a Universal Component Background
						</h2>
						<p style={{ margin: "0.3rem 0 0", fontSize: "0.85rem", color: "#a0a0a0" }}>
							Replacing flat background colors across diverse component sizes, aspect ratios, and layouts.
						</p>
					</div>

					{/* Background Theme Switcher */}
					<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
						<span style={{ fontSize: "0.85rem", color: "#aaa", marginRight: "0.25rem" }}>Underlying Canvas:</span>
						{[
							{ id: "poster", label: "Bold Typographic Poster" },
							{ id: "photo", label: "Hero Photo Backdrop" },
							{ id: "abstract", label: "Chromatic Gradient Noise" },
						].map((item) => (
							<button
								key={item.id}
								onClick={() => setBgTheme(item.id as typeof bgTheme)}
								style={{
									background: bgTheme === item.id ? "#f4bc14" : "rgba(255,255,255,0.08)",
									color: bgTheme === item.id ? "#000000" : "#ffffff",
									border: "1px solid rgba(255,255,255,0.12)",
									padding: "0.4rem 0.9rem",
									borderRadius: "8px",
									fontSize: "0.8rem",
									fontWeight: 600,
									cursor: "pointer",
									transition: "all 150ms ease",
								}}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>

				{/* The High-Contrast Backdrop Canvas with Components */}
				<div
					style={{
						position: "relative",
						borderRadius: "24px",
						padding: "3rem 2.5rem",
						display: "flex",
						flexDirection: "column",
						gap: "2.5rem",
						overflow: "hidden",
						border: "1px solid rgba(255, 255, 255, 0.15)",
						boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
						...(bgTheme === "photo"
							? {
									background: `
										linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%),
										url("/assets/images/portfolio-background.jpg") center/cover no-repeat
									`,
							  }
							: bgTheme === "abstract"
							? {
									background: `
										radial-gradient(circle at 10% 20%, rgba(244, 188, 20, 0.35) 0%, transparent 45%),
										radial-gradient(circle at 90% 80%, rgba(0, 200, 255, 0.3) 0%, transparent 50%),
										radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.25) 0%, transparent 55%),
										repeating-linear-gradient(45deg, #111 0px, #111 15px, #191919 15px, #191919 30px)
									`,
							  }
							: {
									background: "#0e0f14",
							  }),
					}}
				>
					{/* Typographic Poster Decorative Layer when 'poster' is selected */}
					{bgTheme === "poster" && (
						<div
							style={{
								position: "absolute",
								inset: 0,
								padding: "2rem",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								opacity: 0.85,
								pointerEvents: "none",
								userSelect: "none",
							}}
						>
							<div
								style={{
									fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
									fontWeight: 900,
									lineHeight: 0.9,
									color: "#f4bc14",
									letterSpacing: "-2px",
									textTransform: "uppercase",
								}}
							>
								CREATIVE CODE & DESIGN
							</div>
							<div
								style={{
									fontSize: "clamp(3rem, 7vw, 6.5rem)",
									fontWeight: 900,
									lineHeight: 0.9,
									color: "#ffffff",
									letterSpacing: "-1px",
									textTransform: "uppercase",
									textAlign: "right",
								}}
							>
								HIGH CONTRAST REFRACTION
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									fontSize: "1.1rem",
									color: "#f4bc14",
									fontWeight: 700,
									letterSpacing: "4px",
								}}
							>
								<span>SVG DISPLACEMENT ENGINE</span>
								<span>CHROMATIC ABERRATION</span>
								<span>ZERO RUNTIME OVERHEAD</span>
							</div>
						</div>
					)}

					{/* ======================================================== */}
					{/* COMPONENT 1: Horizontal Navbar Pill (Wide)                */}
					{/* ======================================================== */}
					<div style={{ position: "relative", zIndex: 2 }}>
						<span
							style={{
								display: "inline-block",
								fontSize: "0.75rem",
								textTransform: "uppercase",
								letterSpacing: "1.5px",
								color: "#f4bc14",
								fontWeight: 700,
								marginBottom: "0.6rem",
								background: "rgba(0,0,0,0.6)",
								padding: "0.2rem 0.6rem",
								borderRadius: "4px",
							}}
						>
							1. Wide Navbar Pill (width: 100%, height: 60px, radius: 30)
						</span>

						<LiquidGlassPanel
							strength={args.strength ?? 190}
							depth={args.depth ?? 18}
							radius={30}
							chromaticAberration={args.chromaticAberration ?? 4}
							tint={args.tint ?? "rgba(0, 2, 7, 0.36)"}
							glassBorder={args.glassBorder ?? true}
							style={{
								width: "100%",
								height: "60px",
								padding: "0 1.5rem",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
								<div
									style={{
										width: "32px",
										height: "32px",
										borderRadius: "50%",
										background: "#f4bc14",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "#000",
										fontWeight: 900,
										fontSize: "0.9rem",
									}}
								>
									B
								</div>
								<span style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff" }}>Biki Balami</span>
							</div>

							<div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
								<span style={{ fontSize: "0.9rem", color: "#fff", fontWeight: 500 }}>Work</span>
								<span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Experience</span>
								<span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>About</span>
								<PrimaryButton buttonModifierClass={{ height: "2.3rem", padding: "0.2rem 1.3rem" }}>
									Connect
								</PrimaryButton>
							</div>
						</LiquidGlassPanel>
					</div>

					{/* ======================================================== */}
					{/* MIDDLE ROW: Project Card + Stats + Action Bar + Chips     */}
					{/* ======================================================== */}
					<div
						style={{
							position: "relative",
							zIndex: 2,
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
							gap: "2rem",
							alignItems: "start",
						}}
					>
						{/* COMPONENT 2: Feature Project Card (Vertical Medium) */}
						<div>
							<span
								style={{
									display: "inline-block",
									fontSize: "0.75rem",
									textTransform: "uppercase",
									letterSpacing: "1.5px",
									color: "#f4bc14",
									fontWeight: 700,
									marginBottom: "0.6rem",
									background: "rgba(0,0,0,0.6)",
									padding: "0.2rem 0.6rem",
									borderRadius: "4px",
								}}
							>
								2. Feature Project Card (width: 100%, radius: 20)
							</span>

							<LiquidGlassPanel
								strength={args.strength ?? 190}
								depth={args.depth ?? 18}
								radius={20}
								chromaticAberration={args.chromaticAberration ?? 4}
								tint={args.tint ?? "rgba(0, 2, 7, 0.42)"}
								glassBorder={args.glassBorder ?? true}
								style={{
									padding: "1.5rem",
									flexDirection: "column",
									gap: "1.2rem",
								}}
							>
								{/* Card Visual Header */}
								<div
									style={{
										height: "140px",
										borderRadius: "12px",
										background: "linear-gradient(135deg, #f4bc14 0%, #d8960b 60%, #1e1e24 100%)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										position: "relative",
										overflow: "hidden",
									}}
								>
									<div
										style={{
											position: "absolute",
											inset: 0,
											background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)",
										}}
									/>
									<Layers size={48} color="#000000" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.3))" }} />
									<span
										style={{
											position: "absolute",
											top: "0.75rem",
											right: "0.75rem",
											background: "rgba(0,0,0,0.75)",
											color: "#f4bc14",
											fontSize: "0.7rem",
											fontWeight: 700,
											padding: "0.2rem 0.6rem",
											borderRadius: "999px",
											letterSpacing: "1px",
										}}
									>
										CASE STUDY
									</span>
								</div>

								<div>
									<h4 style={{ fontSize: "1.2rem", margin: "0 0 0.4rem", fontWeight: 700, color: "#fff" }}>
										Liquid Glass Engine
									</h4>
									<p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.5 }}>
										Real-time optical displacement with chromatic aberration shader map, preserving contrast over dynamic viewports.
									</p>
								</div>

								{/* Tech Tags */}
								<div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
									{["TypeScript", "SVG Filters", "Chromium"].map((tag) => (
										<span
											key={tag}
											style={{
												fontSize: "0.75rem",
												background: "rgba(255,255,255,0.08)",
												padding: "0.2rem 0.6rem",
												borderRadius: "6px",
												color: "rgba(255,255,255,0.85)",
												border: "1px solid rgba(255,255,255,0.1)",
											}}
										>
											{tag}
										</span>
									))}
								</div>

								<PrimaryButton buttonModifierClass={{ width: "100%", justifyContent: "center" }}>
									View Case Study
									<ArrowUpRight size={16} style={{ marginLeft: "0.4rem" }} />
								</PrimaryButton>
							</LiquidGlassPanel>
						</div>

						{/* COMPONENT 3 & 4: Stats Tiles + Status Badge */}
						<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
							<span
								style={{
									display: "inline-block",
									fontSize: "0.75rem",
									textTransform: "uppercase",
									letterSpacing: "1.5px",
									color: "#f4bc14",
									fontWeight: 700,
									marginBottom: "0.6rem",
									background: "rgba(0,0,0,0.6)",
									padding: "0.2rem 0.6rem",
									borderRadius: "4px",
								}}
							>
								3. Metric Tiles & Micro Badges (Compact)
							</span>

							<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
								{/* Metric Tile 1 */}
								<LiquidGlassPanel
									strength={args.strength ?? 190}
									depth={12}
									radius={16}
									chromaticAberration={args.chromaticAberration ?? 4}
									tint={args.tint ?? "rgba(0, 2, 7, 0.4)"}
									glassBorder={args.glassBorder ?? true}
									style={{
										padding: "1.25rem",
										flexDirection: "column",
										justifyContent: "space-between",
										minHeight: "150px",
									}}
								>
									<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
										<Activity size={22} color="#f4bc14" />
										<span style={{ fontSize: "0.75rem", color: "#4ade80", fontWeight: 700 }}>+18.4%</span>
									</div>
									<div>
										<div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
											60 FPS
										</div>
										<div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "0.25rem" }}>
											GPU Accelerated
										</div>
									</div>
								</LiquidGlassPanel>

								{/* Metric Tile 2 */}
								<LiquidGlassPanel
									strength={args.strength ?? 190}
									depth={12}
									radius={16}
									chromaticAberration={args.chromaticAberration ?? 4}
									tint={args.tint ?? "rgba(0, 2, 7, 0.4)"}
									glassBorder={args.glassBorder ?? true}
									style={{
										padding: "1.25rem",
										flexDirection: "column",
										justifyContent: "space-between",
										minHeight: "150px",
									}}
								>
									<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
										<Zap size={22} color="#f4bc14" />
										<span style={{ fontSize: "0.75rem", color: "#60a5fa", fontWeight: 700 }}>ZERO JS</span>
									</div>
									<div>
										<div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
											0 ms
										</div>
										<div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "0.25rem" }}>
											Filter Render Lag
										</div>
									</div>
								</LiquidGlassPanel>
							</div>

							{/* Micro Badge / Status Pill */}
							<LiquidGlassPanel
								strength={args.strength ?? 190}
								depth={8}
								radius={20}
								chromaticAberration={args.chromaticAberration ?? 4}
								tint="rgba(0, 2, 7, 0.45)"
								glassBorder={true}
								style={{
									height: "42px",
									padding: "0 1.25rem",
									alignItems: "center",
									gap: "0.75rem",
									alignSelf: "flex-start",
								}}
							>
								<div
									style={{
										width: "9px",
										height: "9px",
										borderRadius: "50%",
										background: "#22c55e",
										boxShadow: "0 0 10px #22c55e",
									}}
								/>
								<span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff" }}>
									Available for Select Client Projects
								</span>
							</LiquidGlassPanel>

							{/* Floating Action Bar / Dock */}
							<LiquidGlassPanel
								strength={args.strength ?? 190}
								depth={12}
								radius={26}
								chromaticAberration={args.chromaticAberration ?? 4}
								tint="rgba(0, 2, 7, 0.45)"
								glassBorder={true}
								style={{
									height: "54px",
									padding: "0 1.2rem",
									alignItems: "center",
									gap: "1.25rem",
									alignSelf: "flex-start",
								}}
							>
								<button
									title="Tools"
									style={{ background: "none", border: "none", color: "#f4bc14", cursor: "pointer", display: "flex" }}
								>
									<Sliders size={20} />
								</button>
								<button
									title="Inspect"
									style={{ background: "none", border: "none", color: "rgba(255,255,255,0.8)", cursor: "pointer", display: "flex" }}
								>
									<Compass size={20} />
								</button>
								<button
									title="Security"
									style={{ background: "none", border: "none", color: "rgba(255,255,255,0.8)", cursor: "pointer", display: "flex" }}
								>
									<Shield size={20} />
								</button>
								<button
									title="Source Code"
									style={{ background: "none", border: "none", color: "rgba(255,255,255,0.8)", cursor: "pointer", display: "flex" }}
								>
									<Code2 size={20} />
								</button>
								<button
									title="Share"
									style={{ background: "none", border: "none", color: "rgba(255,255,255,0.8)", cursor: "pointer", display: "flex" }}
								>
									<ExternalLink size={20} />
								</button>
							</LiquidGlassPanel>
						</div>

						{/* COMPONENT 5: Modal / Interactive Dialog Surface */}
						<div>
							<span
								style={{
									display: "inline-block",
									fontSize: "0.75rem",
									textTransform: "uppercase",
									letterSpacing: "1.5px",
									color: "#f4bc14",
									fontWeight: 700,
									marginBottom: "0.6rem",
									background: "rgba(0,0,0,0.6)",
									padding: "0.2rem 0.6rem",
									borderRadius: "4px",
								}}
							>
								4. Dialog / Modal Surface (radius: 24)
							</span>

							<LiquidGlassPanel
								strength={args.strength ?? 190}
								depth={args.depth ?? 18}
								radius={24}
								chromaticAberration={args.chromaticAberration ?? 4}
								tint={args.tint ?? "rgba(0, 2, 7, 0.45)"}
								glassBorder={args.glassBorder ?? true}
								style={{
									padding: "1.75rem",
									flexDirection: "column",
									gap: "1.2rem",
								}}
							>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
									<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
										<Sparkles size={20} color="#f4bc14" />
										<h4 style={{ fontSize: "1.15rem", margin: 0, fontWeight: 700, color: "#fff" }}>
											Glassmorphic Dialog
										</h4>
									</div>
									<span style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem", cursor: "pointer" }}>&times;</span>
								</div>

								<p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.5 }}>
									Liquid glass acts as an elevated backdrop for overlays and modals, naturally adapting to whatever photographic or typographic content lies beneath.
								</p>

								<div
									style={{
										background: "rgba(255,255,255,0.05)",
										border: "1px solid rgba(255,255,255,0.1)",
										borderRadius: "10px",
										padding: "0.85rem",
										fontSize: "0.8rem",
										color: "#f4bc14",
										fontFamily: "monospace",
									}}
								>
									&lt;LiquidGlassPanel radius=&#123;24&#125; depth=&#123;18&#125;&gt;
								</div>

								<div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
									<button
										style={{
											background: "transparent",
											border: "1px solid rgba(255,255,255,0.2)",
											color: "#ffffff",
											padding: "0.5rem 1rem",
											borderRadius: "8px",
											fontSize: "0.85rem",
											cursor: "pointer",
										}}
									>
										Dismiss
									</button>
									<PrimaryButton buttonModifierClass={{ height: "2.3rem", padding: "0.2rem 1.2rem" }}>
										Confirm
									</PrimaryButton>
								</div>
							</LiquidGlassPanel>
						</div>
					</div>
				</div>
			</div>
		);
	},
	args: {
		strength: 230,
		depth: 18,
		radius: 16,
		chromaticAberration: 5,
		tint: "rgba(0, 2, 7, 0.35)",
		glassBorder: true,
	},
};

/**
 * Story 4: Interactive Parameter Tuning Bench.
 * Gives developers and designers real-time slider controls over every
 * optical variable: strength, depth, radius, chromaticAberration, and tint.
 */
export const InteractiveTuningBench: Story = {
	name: "4. Interactive Parameter Tuning Bench",
	render: (args) => {
		const [panelWidth, setPanelWidth] = useState<number>(480);
		const [panelHeight, setPanelHeight] = useState<number>(220);

		return (
			<div
				style={{
					minHeight: "100vh",
					background: "#0a0b0e",
					padding: "2.5rem",
					display: "flex",
					flexDirection: "column",
					gap: "1.5rem",
					fontFamily: "Poppins, sans-serif",
					color: "#ffffff",
				}}
			>
				{/* Top Controls */}
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "1rem",
						background: "rgba(255, 255, 255, 0.04)",
						border: "1px solid rgba(255, 255, 255, 0.08)",
						borderRadius: "14px",
						padding: "1rem 1.5rem",
					}}
				>
					<div>
						<h2 style={{ fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>
							Liquid Glass Optics Tuning Bench
						</h2>
						<p style={{ margin: "0.25rem 0 0", fontSize: "0.85rem", color: "#a0a0a0" }}>
							Adjust the Storybook controls in the bottom panel, or use the dimension sliders below to test filter adaptability.
						</p>
					</div>

					<div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
						<label style={{ fontSize: "0.85rem", color: "#ccc", display: "flex", alignItems: "center", gap: "0.5rem" }}>
							Width:
							<input
								type="range"
								min="240"
								max="720"
								value={panelWidth}
								onChange={(e) => setPanelWidth(Number(e.target.value))}
							/>
							<span style={{ minWidth: "45px", color: "#f4bc14" }}>{panelWidth}px</span>
						</label>

						<label style={{ fontSize: "0.85rem", color: "#ccc", display: "flex", alignItems: "center", gap: "0.5rem" }}>
							Height:
							<input
								type="range"
								min="120"
								max="400"
								value={panelHeight}
								onChange={(e) => setPanelHeight(Number(e.target.value))}
							/>
							<span style={{ minWidth: "45px", color: "#f4bc14" }}>{panelHeight}px</span>
						</label>
					</div>
				</div>

				{/* High Contrast Testing Canvas */}
				<div
					style={{
						position: "relative",
						height: "580px",
						borderRadius: "20px",
						overflow: "hidden",
						border: "1px solid rgba(255, 255, 255, 0.12)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: `
							linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%),
							url("/assets/images/portfolio-background.jpg") center/cover no-repeat
						`,
					}}
				>
					{/* Underlying High Contrast Grid & Typography */}
					<div
						style={{
							position: "absolute",
							inset: 0,
							padding: "3rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							pointerEvents: "none",
							userSelect: "none",
						}}
					>
						<div
							style={{
								fontSize: "clamp(3rem, 6vw, 5.5rem)",
								fontWeight: 900,
								color: "#f4bc14",
								lineHeight: 1,
								letterSpacing: "-1px",
							}}
						>
							DYNAMIC OPTICAL DISPLACEMENT
						</div>
						<div
							style={{
								fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
								fontWeight: 900,
								color: "#ffffff",
								lineHeight: 1,
								textAlign: "right",
							}}
						>
							CHROMATIC ABERRATION PRISM
						</div>
					</div>

					{/* Resizable LiquidGlassPanel */}
					<LiquidGlassPanel
						{...args}
						style={{
							width: `${panelWidth}px`,
							height: `${panelHeight}px`,
							padding: "2rem",
							flexDirection: "column",
							justifyContent: "space-between",
							transition: "width 80ms ease, height 80ms ease",
							borderRadius: `${args.radius ?? 16}px`,
						}}
					>
						<div>
							<div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
								<Sparkles size={22} color="#f4bc14" />
								<h3 style={{ margin: 0, fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>
									Live Optics Tuner
								</h3>
							</div>
							<p style={{ margin: "0.6rem 0 0", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>
								Scale: <strong>{args.strength}</strong> | Depth: <strong>{args.depth}px</strong> | Aberration: <strong>{args.chromaticAberration}px</strong>
							</p>
						</div>

						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<span style={{ fontSize: "0.8rem", color: "#f4bc14", fontWeight: 600 }}>
								SVG feDisplacementMap
							</span>
							<PrimaryButton buttonModifierClass={{ height: "2.3rem", padding: "0.2rem 1.2rem" }}>
								Apply Settings
							</PrimaryButton>
						</div>
					</LiquidGlassPanel>
				</div>
			</div>
		);
	},
	args: {
		strength: 230,
		depth: 18,
		radius: 16,
		chromaticAberration: 5,
		tint: "rgba(0, 2, 7, 0.35)",
		glassBorder: true,
	},
};

/**
 * Story 5: Side-by-side comparison between standard CSS blur and
 * physical Liquid Glass with SVG displacement & chromatic aberration.
 */
export const OpticalComparison: Story = {
	name: "5. Optical Comparison: Blur vs. Liquid Glass",
	render: (args) => {
		return (
			<div
				style={{
					minHeight: "100vh",
					background: "#09090c",
					padding: "2.5rem",
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					fontFamily: "Poppins, sans-serif",
					color: "#ffffff",
				}}
			>
				<div>
					<h2 style={{ fontSize: "1.3rem", margin: "0 0 0.4rem", fontWeight: 700 }}>
						Optical Comparison: Standard CSS Blur vs. Liquid Glass
					</h2>
					<p style={{ margin: 0, fontSize: "0.9rem", color: "#a0a0a0" }}>
						Notice how standard blur merely softens background elements, while Liquid Glass bends, refracts, and diffracts edges into a realistic optical lens.
					</p>
				</div>

				<div
					style={{
						position: "relative",
						height: "520px",
						borderRadius: "20px",
						overflow: "hidden",
						border: "1px solid rgba(255, 255, 255, 0.12)",
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						alignItems: "center",
						gap: "3rem",
						padding: "3rem",
						background: `
							linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.6) 100%),
							url("/assets/images/portfolio-background.jpg") center/cover no-repeat
						`,
					}}
				>
					{/* Underlying Giant High-Contrast Text across both columns */}
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: "90%",
							fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
							fontWeight: 900,
							color: "#f4bc14",
							lineHeight: 1.05,
							textAlign: "center",
							letterSpacing: "-2px",
							pointerEvents: "none",
							userSelect: "none",
						}}
					>
						CONTRAST REFRACTION
					</div>

					{/* LEFT: Standard CSS Blur */}
					<div
						style={{
							position: "relative",
							zIndex: 2,
							height: "260px",
							borderRadius: "16px",
							background: "rgba(0, 2, 7, 0.35)",
							backdropFilter: "blur(16px)",
							WebkitBackdropFilter: "blur(16px)",
							border: "1px solid rgba(255, 255, 255, 0.15)",
							padding: "1.75rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
						}}
					>
						<div>
							<span
								style={{
									fontSize: "0.75rem",
									color: "#e0e0e0",
									background: "rgba(255,255,255,0.1)",
									padding: "0.2rem 0.6rem",
									borderRadius: "4px",
									fontWeight: 600,
								}}
							>
								STANDARD BLUR
							</span>
							<h3 style={{ margin: "0.8rem 0 0.4rem", fontSize: "1.2rem", fontWeight: 700 }}>
								backdrop-filter: blur(16px)
							</h3>
							<p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>
								Uniform Gaussian blur. Background edges lose sharpness evenly with zero physical distortion.
							</p>
						</div>
						<div style={{ fontSize: "0.8rem", color: "#888" }}>No chromatic aberration</div>
					</div>

					{/* RIGHT: Liquid Glass */}
					<LiquidGlassPanel
						{...args}
						style={{
							position: "relative",
							zIndex: 2,
							height: "260px",
							borderRadius: "16px",
							padding: "1.75rem",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<div>
							<span
								style={{
									fontSize: "0.75rem",
									color: "#000",
									background: "#f4bc14",
									padding: "0.2rem 0.6rem",
									borderRadius: "4px",
									fontWeight: 700,
								}}
							>
								LIQUID GLASS
							</span>
							<h3 style={{ margin: "0.8rem 0 0.4rem", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
								SVG feDisplacementMap
							</h3>
							<p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(255,255,255,0.85)" }}>
								Physical lens refraction. High-contrast typography bends, ripples, and splits into prism colors along the glass rim!
							</p>
						</div>
						<div style={{ fontSize: "0.8rem", color: "#f4bc14", fontWeight: 600 }}>
							Dynamic aberration + edge refraction
						</div>
					</LiquidGlassPanel>
				</div>
			</div>
		);
	},
	args: {
		strength: 230,
		depth: 18,
		radius: 16,
		chromaticAberration: 5,
		tint: "rgba(0, 2, 7, 0.35)",
		glassBorder: true,
	},
};
