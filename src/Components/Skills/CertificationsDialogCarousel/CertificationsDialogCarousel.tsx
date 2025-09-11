import React, { useState, useEffect } from "react";
import styles from "./CertificationsDialogCarousel.module.css";

const CertificationsDialogCarousel = ({
	certifications,
	startingIndex = 0,
}: {
	certifications: Array<{
		title: string;
		provider: string;
		image: string;
		description: string;
	}>;
	startingIndex?: number;
}) => {
	const [currentCertIndex, setCurrentCertIndex] = useState(startingIndex);

	// Update currentCertIndex when startingIndex changes
	useEffect(() => {
		setCurrentCertIndex(startingIndex);
	}, [startingIndex]);

	function handlePreviousCert() {
		if (currentCertIndex > 0) {
			setCurrentCertIndex((prevIndex) => prevIndex - 1);
		}
	}

	function handleNextCert() {
		if (currentCertIndex < certifications.length - 1) {
			setCurrentCertIndex((prevIndex) => prevIndex + 1);
		}
	}

	return (
		<div className={styles.carousel}>
			<div
				className={styles.certifications}
				style={{ transform: `translateX(${-currentCertIndex * 100}%)` }}
			>
				{certifications.map((cert, index) => (
					<div key={index} className={styles.certificationContainer}>
						<div className={styles.certificationDetails}>
							<div className={styles.certImageContainer}>
								<img src={cert.image} alt={cert.title} />
							</div>
							<div className={styles.certTextContent}>
								<h3>{cert.title}</h3>
								<p className={styles.certProvider}>{cert.provider}</p>
								<p className={styles.certDescription}>{cert.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{certifications.length > 1 && (
				<div className={styles.buttons}>
					<button
						onClick={handlePreviousCert}
						className="circleButton"
						style={currentCertIndex === 0 ? { opacity: "0%" } : undefined}
					>
						<p>&larr;</p>
					</button>

					<button
						onClick={handleNextCert}
						className="circleButton"
						style={
							currentCertIndex === certifications.length - 1
								? { opacity: "0%" }
								: undefined
						}
					>
						<p> &rarr;</p>
					</button>
				</div>
			)}
		</div>
	);
};

export default CertificationsDialogCarousel;
