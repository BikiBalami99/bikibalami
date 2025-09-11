import { useState, useRef, useEffect } from "react";
import SectionTitle from "../../helperComponents/SectionTitle/SectionTitle";
import { allSkills, certifications } from "../../data/skillsData";
import styles from "./Skills.module.css";

const Skills = () => {
	const categoryOrder = [
		{ key: "frontend", label: "Frontend" },
		{ key: "backend", label: "Backend" },
		{ key: "devops", label: "DevOps" },
		{ key: "tools", label: "Tools" },
		{ key: "computerScience", label: "Comp Sci" },
	];
	const [activeIdx, setActiveIdx] = useState(0);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [selectedCertIndex, setSelectedCertIndex] = useState(0);
	const dialogRef = useRef(null);
	const [direction, setDirection] = useState(0); // -1: left, 0: none, 1: right

	// Improved transitions with direction detection
	const prevActiveIdx = useRef(activeIdx);
	useEffect(() => {
		setDirection(activeIdx > prevActiveIdx.current ? 1 : -1);
		prevActiveIdx.current = activeIdx;
	}, [activeIdx]);

	function openDialog(certIndex) {
		setSelectedCertIndex(certIndex);
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

	// Calculate which categories to show in preview panels
	const leftCategories = activeIdx > 0 ? categoryOrder.slice(0, activeIdx) : [];
	const rightCategories =
		activeIdx < categoryOrder.length - 1 ? categoryOrder.slice(activeIdx + 1) : [];

	return (
		<section id="skills">
			<SectionTitle title="SKILLS" />
			<div className={styles.allSkills}>
				<h3>My Technical Arsenal</h3>

				<h4 className={styles.certificationsTitle}>Skills</h4>

				{/* Tabs */}
				<div className={styles.tabsBar}>
					{categoryOrder.map((cat, idx) => (
						<button
							key={cat.key}
							className={`${styles.tabButton} ${
								idx === activeIdx ? styles.activeTab : ""
							}`}
							onClick={() => setActiveIdx(idx)}
						>
							{cat.label}
						</button>
					))}
				</div>

				{/* Active Panel with vertical previews and masked fades */}
				<div className={styles.skillsWrapper}>
					<div
						className={`${styles.activePanel} ${
							direction === 1
								? styles.slideInRight
								: direction === -1
								? styles.slideInLeft
								: ""
						}`}
					>
						{/* Left vertical preview */}
						{leftCategories.length > 0 && (
							<div className={`${styles.previewStrip} ${styles.previewLeftSide}`}>
								{leftCategories
									.flatMap((c) => allSkills[c.key])
									.map((skill, i) => (
										<div
											className={styles.honeyItem}
											key={`L-${activeIdx}-${skill.title}-${i}`}
										>
											<img src={skill.icon} alt="" />
										</div>
									))}
							</div>
						)}

						{/* Active centered panel */}
						<h4 className={styles.categoryTitle}>{categoryOrder[activeIdx].label}</h4>
						<div className={styles.skillsList}>
							{allSkills[categoryOrder[activeIdx].key].map((skill, index) => (
								<div
									key={`${categoryOrder[activeIdx].key}-${index}`}
									className={styles.skillItem}
								>
									<div className={styles.skillIconWrapper}>
										<img src={skill.icon} alt={skill.title} />
									</div>
									<p>{skill.title}</p>
								</div>
							))}
						</div>

						{/* Right vertical preview */}
						{rightCategories.length > 0 && (
							<div className={`${styles.previewStrip} ${styles.previewRightSide}`}>
								{rightCategories
									.flatMap((c) => allSkills[c.key])
									.map((skill, i) => (
										<div
											className={styles.honeyItem}
											key={`R-${activeIdx}-${skill.title}-${i}`}
										>
											<img src={skill.icon} alt="" />
										</div>
									))}
							</div>
						)}
					</div>
				</div>

				{/* Certifications Collage */}
				<div className={styles.certificationsSection}>
					<h4 className={styles.certificationsTitle}>Certifications & Education</h4>
					<div className={styles.certificationsGrid}>
						{certifications.map((cert, index) => (
							<div
								key={index}
								className={styles.certificationCard}
								onClick={() => openDialog(index)}
							>
								<div className={styles.certImageWrapper}>
									<img src={cert.image} alt={cert.title} />
								</div>
								<div className={styles.certInfo}>
									<h5>{cert.title}</h5>
									<p className={styles.certProvider}>{cert.provider}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Fullscreen Modal */}
				{isDialogOpen && (
					<dialog
						ref={dialogRef}
						className={`${styles.modal} ${isClosing ? styles.closing : ""}`}
						onClick={handleDialogClick}
					>
						<div className={styles.modalContent}>
							<div className={styles.certificationDetails}>
								<div className={styles.certImageContainer}>
									<img
										src={certifications[selectedCertIndex].image}
										alt={certifications[selectedCertIndex].title}
									/>
								</div>
								<div className={styles.certTextContent}>
									<h3>{certifications[selectedCertIndex].title}</h3>
									<p className={styles.certProvider}>
										{certifications[selectedCertIndex].provider}
									</p>
									<p className={styles.certDescription}>
										{certifications[selectedCertIndex].description}
									</p>
								</div>
							</div>
							<form method="dialog">
								<button
									className={`circleButton ${styles.modalCloseButton}`}
									type="button"
									onClick={closeDialog}
									style={{ width: "40px" }}
								>
									<p>&times;</p>
								</button>
							</form>
						</div>
					</dialog>
				)}
			</div>
		</section>
	);
};

export default Skills;
