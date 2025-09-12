import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ArtDialogCarousel.module.css";

const ArtDialogCarousel = ({
	arrayOfArt,
	startingIndex = 0,
}: {
	arrayOfArt: string[];
	startingIndex?: number;
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(startingIndex);

	// Update currentImageIndex when startingIndex changes
	useEffect(() => {
		setCurrentImageIndex(startingIndex);
	}, [startingIndex]);

	function handlePreviousImage() {
		if (currentImageIndex > 0) {
			setCurrentImageIndex((prevIndex) => prevIndex - 1);
		}
	}

	function handleNextImage() {
		if (currentImageIndex < arrayOfArt.length - 1) {
			setCurrentImageIndex((prevIndex) => prevIndex + 1);
		}
	}

	return (
		<div className={styles.carousel}>
			<div
				className={styles.images}
				style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}
			>
				{arrayOfArt.map((artPath, index) => (
					<div key={index} className={styles.imageContainer}>
						<img src={artPath} className={styles.image} alt={`Artwork ${index + 1}`} />
					</div>
				))}
			</div>

			{arrayOfArt.length > 1 && (
				<div className={styles.buttons}>
					<button
						onClick={handlePreviousImage}
						className="circleButton leftArrow"
						style={currentImageIndex === 0 ? { opacity: "0%" } : undefined}
					>
						<ChevronLeft size={20} color="black" />
					</button>

					<button
						onClick={handleNextImage}
						className="circleButton rightArrow"
						style={
							currentImageIndex === arrayOfArt.length - 1 ? { opacity: "0%" } : undefined
						}
					>
						<ChevronRight size={20} color="black" />
					</button>
				</div>
			)}
		</div>
	);
};

export default ArtDialogCarousel;
