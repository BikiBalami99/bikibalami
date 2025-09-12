import React, { useState, useEffect, useRef } from "react";
import { X, ExternalLink, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ProjectModal.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ArtDialogCarousel from "../Carousel/ArtDialogCarousel";

type Project = {
	id: string;
	URL: string;
	background: string;
	title: string;
	description: string;
	thumbnail: string;
	logo?: string;
	screenshots?: string[];
	videos?: string[];
	videoThumbnails?: string[];
	technologies?: string[];
	features?: string[];
};

type ProjectModalProps = {
	project: Project | null;
	isOpen: boolean;
	onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const imageDialogRef = useRef<HTMLDialogElement | null>(null);

	// Only use videos for now - GIFs in preview, MP4s in modal
	const videos = project?.videos || [];
	const videoThumbnails = project?.videoThumbnails || videos;

	const allMedia = videoThumbnails;
	const allMediaForModal = videos;

	// Reset state when modal opens/closes
	useEffect(() => {
		if (isOpen) {
			setIsImageModalOpen(false);
			setIsClosing(false);
			setSelectedImageIndex(0);
		}
	}, [isOpen]);

	// Handle dialog open/close
	useEffect(() => {
		if (isOpen && dialogRef.current) {
			dialogRef.current.showModal();
			// Disable body scroll more effectively
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else {
			if (dialogRef.current) {
				dialogRef.current.close();
			}
			// Always re-enable body scroll when modal is not open
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
		}
	}, [isOpen]);

	// Handle image modal open/close
	useEffect(() => {
		if (isImageModalOpen && imageDialogRef.current) {
			imageDialogRef.current.showModal();
			// Body scroll is already disabled by parent modal, but ensure it stays disabled
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else if (imageDialogRef.current) {
			imageDialogRef.current.close();
			// Don't re-enable body scroll here as parent modal might still be open
		}
	}, [isImageModalOpen]);

	// Cleanup effect to ensure scroll is restored on unmount
	useEffect(() => {
		return () => {
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
		};
	}, []);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			onClose();
			setIsClosing(false);
		}, 200);
	};

	const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === dialogRef.current) {
			handleClose();
		}
	};

	const isVideo = (path: string) => {
		return path.match(/\.(mp4|webm|ogg|mov|avi)$/i);
	};

	const handleImageClick = (index: number) => {
		setSelectedImageIndex(index);
		setIsImageModalOpen(true);
	};

	const handleImageModalClose = () => {
		setIsImageModalOpen(false);
	};

	if (!project) return null;

	return (
		<>
			{isOpen && (
				<dialog
					ref={dialogRef}
					className={`${styles.modal} ${isClosing ? styles.closing : ""}`}
					onClick={handleDialogClick}
				>
					{/* Close Button - Top Right */}
					<button className={`circleButton ${styles.closeButton}`} onClick={handleClose}>
						<X size={20} color="black" />
					</button>

					<div className={styles.modalContent}>
						{/* Header */}
						<div className={styles.header}>
							<div className={styles.projectInfo}>
								<h2 className={styles.projectTitle}>{project.title}</h2>
								<p className={styles.projectDescription}>{project.description}</p>
							</div>
							<div className={styles.headerActions}>
								<PrimaryButton
									onClick={() => window.open(project.URL, "_blank")}
									buttonModifierClass={{
										paddingTop: "1rem",
										paddingBottom: "1rem",
										paddingLeft: "3rem",
										paddingRight: "3rem",
										maxWidth: "none",
										display: "flex",
										alignItems: "center",
										gap: "0.5rem",
									}}
									textModifierClass={{
										fontSize: "1rem",
										fontWeight: "600",
										display: "flex",
										alignItems: "center",
										gap: "0.5rem",
									}}
								>
									<ExternalLink size={20} color="black" />
									Visit Project
								</PrimaryButton>
							</div>
						</div>

						{/* Media Carousel */}
						{allMedia.length > 0 && (
							<div className={styles.mediaSection}>
								<div className={styles.mediaCarousel}>
									{allMedia.map((media, index) => (
										<div
											key={index}
											className={styles.mediaItem}
											onClick={() => handleImageClick(index)}
										>
											{isVideo(media) ? (
												<video
													src={media}
													className={styles.mediaPreview}
													preload="metadata"
													muted
												/>
											) : (
												<img
													src={media}
													alt={`${project.title} screenshot ${index + 1}`}
													className={styles.mediaPreview}
												/>
											)}
										</div>
									))}
								</div>
							</div>
						)}

						{/* Project Details */}
						<div className={styles.detailsSection}>
							{project.technologies && project.technologies.length > 0 && (
								<div className={styles.detailGroup}>
									<h3>Technologies Used</h3>
									<div className={styles.techTags}>
										{project.technologies.map((tech, index) => (
											<span key={index} className={styles.techTag}>
												{tech}
											</span>
										))}
									</div>
								</div>
							)}

							{project.features && project.features.length > 0 && (
								<div className={styles.detailGroup}>
									<h3>Key Features</h3>
									<ul className={styles.featuresList}>
										{project.features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</dialog>
			)}

			{/* Image Modal using Art Dialog Carousel */}
			{isImageModalOpen && (
				<dialog
					ref={imageDialogRef}
					className={styles.imageModal}
					onClick={(e) => {
						if (e.target === e.currentTarget) {
							handleImageModalClose();
						}
					}}
				>
					<div className={styles.imageModalContent}>
						<ArtDialogCarousel
							arrayOfArt={allMediaForModal}
							startingIndex={selectedImageIndex}
						/>
						<button
							className={`circleButton ${styles.imageModalClose}`}
							onClick={handleImageModalClose}
						>
							<X size={20} color="black" />
						</button>
					</div>
				</dialog>
			)}
		</>
	);
};

export default ProjectModal;
