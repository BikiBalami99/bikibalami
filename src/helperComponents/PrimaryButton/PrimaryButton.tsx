import React from "react";
import styles from "./PrimaryButton.module.css";

export type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	/** Optional inline style override for the button container (supported for backward compatibility) */
	buttonModifierClass?: React.CSSProperties;
	/** Optional inline style override for the inner button label (supported for backward compatibility) */
	textModifierClass?: React.CSSProperties;
};

const PrimaryButton = ({
	children,
	onClick,
	type = "button",
	buttonModifierClass,
	textModifierClass,
	disabled = false,
	className,
	style,
	...restProps
}: PrimaryButtonProps) => {
	const hoverBallSize = 80;

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (disabled) return;
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left - hoverBallSize / 2;
		const y = e.clientY - rect.top - hoverBallSize / 2;
		e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
		e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
	};

	return (
		<button
			disabled={disabled}
			className={[styles.primaryButton, className].filter(Boolean).join(" ")}
			onMouseEnter={handleMouseMove}
			onMouseMove={handleMouseMove}
			onClick={disabled ? undefined : onClick}
			type={type}
			style={{ ...buttonModifierClass, ...style }}
			{...restProps}
		>
			{!disabled && <div className={styles.hoverBall} aria-hidden="true" />}
			<span className={styles.content} style={textModifierClass}>
				{children}
			</span>
		</button>
	);
};

export default PrimaryButton;
