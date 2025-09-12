import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./CertificationsCarousel.module.css";

const CertificationsCarousel = ({
	certifications,
	startingIndex = 0,
	onCertClick,
}: {
	certifications: Array<{
		title: string;
		provider: string;
		image: string;
		description: string;
	}>;
	startingIndex?: number;
	onCertClick?: (index: number) => void;
}) => {
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

	const carouselRef = useRef<HTMLDivElement | null>(null);

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
		const carouselWidth = carouselRef.current!.getBoundingClientRect().width;
		const maxCardsOnView = Math.floor(carouselWidth / (cardWidth + gap));
		const totalCards = certifications.length;
		const initialHiddenCards = totalCards - maxCardsOnView;
		const stoppingDist = cardWidth * -initialHiddenCards;
		setStoppingDistance(stoppingDist);
	}, [certifications, windowWidth, cardWidth, gap]);

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
		<div ref={carouselRef} className={styles.certificationsCarousel}>
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
				{certifications.map((cert, index) => (
					<div
						key={index}
						className={styles.certificationCard}
						style={{
							width: `${cardWidth}px`,
						}}
						onClick={() => onCertClick && onCertClick(index)}
					>
						<div className={styles.certImageWrapper}>
							<img src={cert.image} alt={cert.title} loading="lazy" />
						</div>
						<div className={styles.certInfo}>
							<h5 className={styles.certTitle}>{cert.title}</h5>
							<p className={styles.certProvider}>{cert.provider}</p>
							<p className={styles.certDescription}>{cert.description}</p>
						</div>
					</div>
				))}
			</div>

			<div className={styles.leftRightButtons}>
				<button onClick={handleLeftClick} className="circleButton leftArrow">
					<ChevronLeft size={20} color="black" />
				</button>
				<button onClick={handleRightClick} className="circleButton rightArrow">
					<ChevronRight size={20} color="black" />
				</button>
			</div>
		</div>
	);
};

export default CertificationsCarousel;
