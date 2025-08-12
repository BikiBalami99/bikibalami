import React, { useState, useEffect } from "react";
import styles from "./ArtDialogCarousel.module.css";

const ArtDialogCarousel = ({ arrayOfArt, startingIndex = 0 }) => {
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
						className="circleButton"
						style={currentImageIndex === 0 ? { opacity: "0%" } : null}
					>
						<p>&larr;</p>
					</button>

					<button
						onClick={handleNextImage}
						className="circleButton"
						style={currentImageIndex === arrayOfArt.length - 1 ? { opacity: "0%" } : null}
					>
						<p> &rarr;</p>
					</button>
				</div>
			)}
		</div>
	);
};

export default ArtDialogCarousel;
