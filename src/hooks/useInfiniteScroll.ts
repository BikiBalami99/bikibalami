import { useEffect } from "react";

export const useInfiniteScroll = () => {
	useEffect(() => {
		// If a user hasn't opted in for reduced motion, then we add the animation
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		const addAnimation = () => {
			const scrollers = document.querySelectorAll(".scroller:not([data-animated])");

			scrollers.forEach((scroller) => {
				// add data-animated="true" to every `.scroller` on the page
				scroller.setAttribute("data-animated", "true");

				// Make an array from the elements within `.scroller__inner`
				const scrollerInner = scroller.querySelector(".scroller__inner");
				if (!scrollerInner) return;

				const scrollerContent = Array.from(scrollerInner.children);

				// For each item in the array, clone it
				// add aria-hidden to it
				// add it into the `.scroller__inner`
				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true) as Element;
					duplicatedItem.setAttribute("aria-hidden", "true");
					scrollerInner.appendChild(duplicatedItem);
				});
			});
		};

		// Run immediately
		addAnimation();

		// Also run after a short delay to catch any late-rendering elements
		const timeoutId = setTimeout(addAnimation, 100);

		return () => clearTimeout(timeoutId);
	}, []);
};
