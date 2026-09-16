import React, { forwardRef, useState } from "react";
import styles from "./Hamburger.module.css";

export type HamburgerProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
	/** Controlled open state */
	isOpen?: boolean;
	/** Default state for uncontrolled usage */
	defaultOpen?: boolean;
	/** Callback invoked when toggle state changes */
	onToggle?: (isOpen: boolean) => void;
	/** Legacy callback compatibility with Navbar */
	toggleNavBarView?: () => void;
	/** Icon width / height in pixels (default: 32) */
	size?: number;
	/** Inactive stroke color (default: "#ffffff") */
	color?: string;
	/** Active / expanded stroke color (default: matches color or "#f4bc14") */
	activeColor?: string;
	/** Animation transition duration in milliseconds (default: 380) */
	duration?: number;
	/** Whether to hide this toggle on desktop screens (min-width: 1024px) */
	hideOnDesktop?: boolean;
	/** Accessible label override */
	ariaLabel?: string;
	/** ID of the element controlled by this toggle */
	ariaControls?: string;
};

const Hamburger = forwardRef<HTMLButtonElement, HamburgerProps>(
	(
		{
			isOpen,
			defaultOpen = false,
			onToggle,
			toggleNavBarView,
			size = 32,
			color = "#ffffff",
			activeColor,
			duration = 380,
			hideOnDesktop = false,
			ariaLabel,
			ariaControls = "primary-navigation",
			className,
			style,
			disabled = false,
			onClick,
			...props
		},
		ref
	) => {
		const isControlled = typeof isOpen === "boolean";
		const [internalOpen, setInternalOpen] = useState(defaultOpen);
		const currentOpen = isControlled ? isOpen : internalOpen;

		const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			onClick?.(e);
			if (disabled) return;

			const nextOpen = !currentOpen;
			if (!isControlled) {
				setInternalOpen(nextOpen);
			}

			onToggle?.(nextOpen);
			toggleNavBarView?.();
		};

		const dynamicStyles: React.CSSProperties = {
			...style,
			"--button-color": color,
			"--button-active-color": activeColor ?? color,
			"--animation-duration": `${duration}ms`,
		} as React.CSSProperties;

		return (
			<button
				ref={ref}
				type="button"
				aria-controls={ariaControls}
				aria-expanded={currentOpen}
				aria-label={
					ariaLabel ?? (currentOpen ? "Close navigation menu" : "Open navigation menu")
				}
				disabled={disabled}
				className={[
					styles.hambutton,
					hideOnDesktop && styles.hideOnDesktop,
					className,
				]
					.filter(Boolean)
					.join(" ")}
				style={dynamicStyles}
				onClick={handleClick}
				{...props}
			>
				<svg
					fill="none"
					className={styles.hamburger}
					viewBox="0 0 100 100"
					width={`${size}px`}
					height={`${size}px`}
					aria-hidden="true"
				>
					<path
						d="m 30 40 h 40 a 1 1 0 0 1 0 20 h -40 a 1 1 0 0 1 0 -40 h 40 a 1 1 0 0 1 0 60 h -20 v -40"
						className={styles.line}
						strokeWidth="5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		);
	}
);

Hamburger.displayName = "Hamburger";

export default Hamburger;
