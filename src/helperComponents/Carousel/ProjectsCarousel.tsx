import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";
import styles from "./ProjectsCarousel.module.css";
import ProjectModal from "../ProjectModal/ProjectModal";

type Project = {
	id: string;
	URL: string;
	background: string;
	title: string;
	description: string;
	thumbnail: string;
	screenshots?: string[];
	videos?: string[];
	technologies?: string[];
	features?: string[];
};

const ProjectsCarousel = ({ arrayOfProjects }: { arrayOfProjects: Project[] }) => {
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

	// Modal state
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const carouselRef = useRef<HTMLDivElement | null>(null);

	// Making responsive card size
	useEffect(() => {
		if (windowWidth <= 450) {
			setCardWidth(280);
			setGap(16);
		} else {
			setCardWidth(320);
			setGap(32);
		}
	}, [windowWidth]);

	const moveDistance = cardWidth + gap + 1;

	useEffect(() => {
		const carouselWidth = carouselRef.current!.getBoundingClientRect().width;
		const maxCardsOnView = Math.floor(carouselWidth / (cardWidth + gap));
		const totalCards = arrayOfProjects.length;
		const initialHiddenCards = totalCards - maxCardsOnView;
		const stoppingDist = cardWidth * -initialHiddenCards;
		setStoppingDistance(stoppingDist);
	}, [arrayOfProjects, windowWidth, cardWidth, gap]);

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

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};

	// Render
	return (
		<div ref={carouselRef} className={styles.projectsCarousel}>
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
				{arrayOfProjects.map((data) => (
					<div
						key={data.id}
						className={styles.card}
						style={{
							width: `${cardWidth}px`,
						}}
						onClick={() => handleProjectClick(data)}
					>
						<div className={styles.cardHeader}>
							<div className={styles.appIcon} style={{ background: data.background }}>
								<img src={data.thumbnail} alt={`${data.title} icon`} />
							</div>
							<div className={styles.appInfo}>
								<h4 className={styles.cardTitle}>{data.title}</h4>
								<p className={styles.cardDescription}>{data.description}</p>
							</div>
						</div>

						<div className={styles.cardPreview}>
							<img src={data.thumbnail} alt={`${data.title} preview`} />
							<div className={styles.previewOverlay}>
								<Play size={32} />
							</div>
						</div>

						<div className={styles.cardActions}>
							<button
								className={styles.actionButton}
								onClick={(e) => {
									e.stopPropagation();
									window.open(data.URL, "_blank");
								}}
							>
								<ExternalLink size={16} color="black" />
								Visit
							</button>
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

			<ProjectModal
				project={selectedProject}
				isOpen={isModalOpen}
				onClose={handleModalClose}
			/>
		</div>
	);
};

export default ProjectsCarousel;
