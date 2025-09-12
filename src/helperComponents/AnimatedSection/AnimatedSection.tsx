import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./AnimatedSection.module.css";

interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	threshold?: number;
	rootMargin?: string;
	triggerOnce?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
	children,
	className = "",
	delay = 0,
	threshold = 0.1,
	rootMargin = "0px 0px 20% 0px",
	triggerOnce = true,
}) => {
	const { elementRef, isVisible } = useScrollAnimation({
		threshold,
		rootMargin,
		triggerOnce,
		delay,
	});

	return (
		<section
			ref={elementRef}
			className={`${styles.animatedSection} ${
				isVisible ? styles.visible : ""
			} ${className}`}
		>
			{children}
		</section>
	);
};

export default AnimatedSection;
