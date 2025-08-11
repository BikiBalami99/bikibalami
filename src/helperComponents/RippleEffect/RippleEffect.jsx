import { useEffect, useState } from "react";
import styles from "./RippleEffect.module.css";

const RippleEffect = () => {
	const [ripples, setRipples] = useState([]);

	useEffect(() => {
		const handleClick = (e) => {
			// Create a new ripple
			const ripple = {
				id: Date.now() + Math.random(),
				x: e.clientX,
				y: e.clientY,
				timestamp: Date.now(),
			};

			setRipples((prev) => [...prev, ripple]);

			// Remove ripple after animation completes
			setTimeout(() => {
				setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
			}, 600); // Match this with CSS animation duration
		};

		// Add click listener to the entire document
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<>
			{ripples.map((ripple) => (
				<div
					key={ripple.id}
					className={styles.ripple}
					style={{
						left: ripple.x - 15, // Center the ripple on click point
						top: ripple.y - 15,
					}}
				/>
			))}
		</>
	);
};

export default RippleEffect;
