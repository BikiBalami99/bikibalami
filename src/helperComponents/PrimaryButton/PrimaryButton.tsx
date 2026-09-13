import React, { forwardRef } from "react";
import styles from "./PrimaryButton.module.css";

export type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	/** Optional inline style override for the button container (supported for backward compatibility) */
	buttonModifierClass?: React.CSSProperties;
	/** Optional inline style override for the inner button label (supported for backward compatibility) */
	textModifierClass?: React.CSSProperties;
};

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
	(
		{
			children,
			onClick,
			onMouseEnter,
			onMouseMove,
			onMouseDown,
			onPointerDown,
			type = "button",
			buttonModifierClass,
			textModifierClass,
			disabled = false,
			className,
			style,
			...restProps
		},
		ref
	) => {
		const hoverBallSize = 80;

		const updateInteractionCoords = (
			e: React.MouseEvent<HTMLButtonElement> | React.PointerEvent<HTMLButtonElement>
		) => {
			if (disabled) return;
			const rect = e.currentTarget.getBoundingClientRect();
			const x = e.clientX - rect.left - hoverBallSize / 2;
			const y = e.clientY - rect.top - hoverBallSize / 2;
			e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
			e.currentTarget.style.setProperty("--mouse-y", `${y}px`);

			// Adaptive 3D tilt: normalizes perceived edge dip across both compact and long buttons
			const halfWidth = rect.width / 2;
			const halfHeight = rect.height / 2;
			const normX = Math.max(-1, Math.min(1, (e.clientX - rect.left - halfWidth) / halfWidth));
			const normY = Math.max(-1, Math.min(1, (e.clientY - rect.top - halfHeight) / halfHeight));

			// Maintain a consistent ~7px physical edge travel regardless of button length
			const targetTravelPx = 7;
			const maxTiltY = Math.min(8.5, Math.max(3.0, (targetTravelPx / halfWidth) * (180 / Math.PI)));
			const maxTiltX = Math.min(7.5, Math.max(3.5, (targetTravelPx / halfHeight) * (180 / Math.PI)));

			const tiltX = -normY * maxTiltX;
			const tiltY = normX * maxTiltY;
			e.currentTarget.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
			e.currentTarget.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
		};

		return (
			<button
				ref={ref}
				disabled={disabled}
				className={[styles.primaryButton, className].filter(Boolean).join(" ")}
				onMouseEnter={(e) => {
					updateInteractionCoords(e);
					onMouseEnter?.(e);
				}}
				onMouseMove={(e) => {
					updateInteractionCoords(e);
					onMouseMove?.(e);
				}}
				onMouseDown={(e) => {
					updateInteractionCoords(e);
					onMouseDown?.(e);
				}}
				onPointerDown={(e) => {
					updateInteractionCoords(e);
					onPointerDown?.(e);
				}}
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
	}
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
