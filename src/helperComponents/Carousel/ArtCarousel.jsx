import React, { useEffect, useRef, useState } from "react";
import styles from "./ArtCarousel.module.css";

const ArtCarousel = ({ arrayOfArt, startingIndex = 0, onArtClick }) => {
	// State management
	const [movingPartPosition, setMovingPartPosition] = useState(0);
	const [stoppingDistance, setStoppingDistance] = useState(0);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [cardWidth, setCardWidth] = useState(250);
	const [gap, setGap] = useState(16);
	// gap is also used as padding
	const [goLeftOk, setGoLeftOk] = useState(false);
	const [goRightOk, setGoRightOk] = useState(false);

	// Bounce feedback when user tries to go past the edges
	const [triggerLeftBounce, setTriggerLeftBounce] = useState(false);
	const [triggerRightBounce, setTriggerRightBounce] = useState(false);

	const carouselRef = useRef();

	// Making responsive card size
	useEffect(() => {
		if (windowWidth <= 450) {
			setCardWidth(250);
			setGap(16);
		} else {
			setCardWidth(300);
			setGap(32);
		}
	}, [windowWidth]);

	// Set initial position based on startingIndex
	useEffect(() => {
		if (startingIndex > 0) {
			const initialPosition = -(startingIndex * (cardWidth + gap));
			setMovingPartPosition(initialPosition);
		}
	}, [startingIndex, cardWidth, gap]);

	const moveDistance = cardWidth + gap + 1;

	useEffect(() => {
		const carouselWidth = carouselRef.current.getBoundingClientRect().width;
		const maxCardsOnView = Math.floor(carouselWidth / (cardWidth + gap));
		const totalCards = arrayOfArt.length;
		const initialHiddenCards = totalCards - maxCardsOnView;
		const stoppingDist = cardWidth * -initialHiddenCards;
		setStoppingDistance(stoppingDist);
	}, [arrayOfArt, windowWidth, cardWidth, gap]);

	// To fix the bug where the left and right buttons act weird after resizing the window
	function handleResize() {
		setWindowWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Finding out whether the left and right button should work
	useEffect(() => {
		if (movingPartPosition < 0) {
			setGoLeftOk(true);
		} else {
			setGoLeftOk(false);
		}

		if (movingPartPosition > 0) {
			setMovingPartPosition(0);
		}

		if (movingPartPosition > stoppingDistance) {
			setGoRightOk(true);
		} else {
			setGoRightOk(false);
		}
	});

	// Event handlers
	const handleLeftClick = () => {
		if (goLeftOk) {
			setMovingPartPosition((prev) => prev + moveDistance);
			setTriggerLeftBounce(false);
		} else {
			setTriggerLeftBounce(true);
			setTimeout(() => setTriggerLeftBounce(false), 200);
		}
	};

	const handleRightClick = () => {
		if (goRightOk) {
			setMovingPartPosition((prev) => prev - moveDistance);
			setTriggerRightBounce(false);
		} else {
			setTriggerRightBounce(true);
			setTimeout(() => setTriggerRightBounce(false), 200);
		}
	};

	// Render
	return (
		<div ref={carouselRef} className={styles.artCarousel}>
			<div
				className={`${styles.movingPart} ${
					triggerLeftBounce ? styles.triggerBounceLeft : ""
				} ${triggerRightBounce ? styles.triggerBounceRight : ""}`}
				style={{
					transform: `translateX(${movingPartPosition}px)`,
					transition: "transform 300ms ease-in-out",
					gap: `${gap}px`,
					padding: `${gap}px`,
				}}
			>
				{arrayOfArt.map((artPath, index) => (
					<div
						key={index}
						className={styles.artCard}
						style={{
							width: `${cardWidth}px`,
						}}
						onClick={() => onArtClick && onArtClick(index)}
					>
						<div className={styles.artImageWrapper}>
							<img src={artPath} alt={`Artwork ${index + 1}`} loading="lazy" />
						</div>
					</div>
				))}
			</div>

			<div className={styles.leftRightButtons}>
				<button onClick={handleLeftClick} className="circleButton">
					<p> &larr;</p>
				</button>
				<button onClick={handleRightClick} className="circleButton">
					<p> &rarr;</p>
				</button>
			</div>
		</div>
	);
};

export default ArtCarousel;
