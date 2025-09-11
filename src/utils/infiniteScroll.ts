// Infinite Scroll Animation Utility
// Based on Kevin Powell's tutorial for truly infinite scrolling

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach((scroller) => {
		// add data-animated="true" to every `.scroller` on the page
		scroller.setAttribute("data-animated", "true");

		// Make an array from the elements within `.scroller__inner`
		const scrollerInner = scroller.querySelector(".scroller__inner");
		const scrollerContent = Array.from(scrollerInner?.children || []);

		// For each item in the array, clone it
		// add aria-hidden to it
		// add it into the `.scroller__inner`
		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true) as Element;
			duplicatedItem.setAttribute("aria-hidden", "true");
			scrollerInner?.appendChild(duplicatedItem);
		});
	});
}

// Re-run animation setup when new scrollers are added to the DOM
export const setupInfiniteScroll = () => {
	const newScrollers = document.querySelectorAll(".scroller:not([data-animated])");
	if (
		newScrollers.length > 0 &&
		!window.matchMedia("(prefers-reduced-motion: reduce)").matches
	) {
		addAnimation();
	}
};
