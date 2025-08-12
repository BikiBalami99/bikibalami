import React, { useEffect, useRef, useState } from "react";
import styles from "./Art.module.css";
import SectionTitle from "../../helperComponents/SectionTitle/SectionTitle";
import ArtCarousel from "../../helperComponents/Carousel/ArtCarousel";
import ArtDialogCarousel from "../../helperComponents/Carousel/ArtDialogCarousel";

const Art = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [selectedArtIndex, setSelectedArtIndex] = useState(0);
	const dialogRef = useRef(null);

	const artImages = [
		"/assets/Art/Chitlang.jpeg",
		"/assets/Art/electro-axe Large.jpeg",
		"/assets/Art/groot.jpeg",
		"/assets/Art/house.jpeg",
		"/assets/Art/Image 4 Large Large.jpeg",
		"/assets/Art/inclusivity.jpeg",
		"/assets/Art/Ironman.jpeg",
		"/assets/Art/Mom-and-dad.jpeg",
		"/assets/Art/moonknight.jpeg",
		"/assets/Art/see.jpeg",
		"/assets/Art/Session 2-3 Large.jpeg",
		"/assets/Art/starry-chitlang.jpeg",
		"/assets/Art/uprizine-cover.jpeg",
	];

	function openDialog(artIndex) {
		setSelectedArtIndex(artIndex);
		setIsDialogOpen(true);
		setIsClosing(false);
	}

	function closeDialog() {
		setIsClosing(true);
		setTimeout(() => {
			setIsDialogOpen(false);
			setIsClosing(false);
		}, 200);
	}

	// Handle click outside to close
	const handleDialogClick = (e) => {
		if (e.target === dialogRef.current) {
			closeDialog();
		}
	};

	useEffect(() => {
		if (isDialogOpen && dialogRef.current) {
			dialogRef.current.showModal();
		} else if (dialogRef.current) {
			dialogRef.current.close();
		}
	}, [isDialogOpen]);

	return (
		<section id="art">
			<SectionTitle title="ART" />
			<div className={styles.art}>
				<h3>My Creative Expression</h3>
				<p>Digital art, paintings, and illustrations</p>
				<div className={styles.carouselContainer}>
					<ArtCarousel arrayOfArt={artImages} onArtClick={openDialog} />
				</div>
				{isDialogOpen && (
					<dialog
						ref={dialogRef}
						className={`${styles.modal} ${isClosing ? styles.closing : ""}`}
						onClick={handleDialogClick}
					>
						<div>
							<ArtDialogCarousel
								arrayOfArt={artImages}
								startingIndex={selectedArtIndex}
							/>
						</div>
						<form method="dialog">
							<button
								className={`circleButton ${styles.modalCloseButton}`}
								type="button"
								onClick={closeDialog}
								style={{ width: "40px" }}
							>
								<p> &times;</p>
							</button>
						</form>
					</dialog>
				)}
			</div>
		</section>
	);
};

export default Art;
