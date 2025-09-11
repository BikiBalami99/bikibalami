import React from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

interface SectionTitleProps {
	title: string;
	speed?: "fast" | "slow" | "normal";
	direction?: "left" | "right";
}

const SectionTitle = ({
	title,
	speed = "normal",
	direction = "left",
}: SectionTitleProps) => {
	useInfiniteScroll();

	return (
		<div
			className="scroller"
			{...(speed !== "normal" && { "data-speed": speed })}
			{...(direction !== "left" && { "data-direction": direction })}
		>
			<ul className="scroller__inner">
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
				<li>{title}</li>
			</ul>
		</div>
	);
};

export default SectionTitle;
