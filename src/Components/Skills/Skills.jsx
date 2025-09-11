import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "../../helperComponents/SectionTitle/SectionTitle";
import { allSkills, certifications } from "../../data/skillsData";
import styles from "./Skills.module.css";

const Skills = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [selectedCertIndex, setSelectedCertIndex] = useState(0);
	const dialogRef = useRef(null);

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
		<section id="skills">
			<SectionTitle title="SKILLS" />
			<div className={styles.allSkills}>
				<h3>My Technical Arsenal</h3>

				{/* Skills Grid */}
				<div className={styles.skillsGrid}>
					{/* Development Skills */}
					<div className={styles.skillCategory}>
						<h4 className={styles.categoryTitle}>Development</h4>
						<div className={styles.skillsList}>
							{allSkills.development.map((skill, index) => (
								<div key={index} className={styles.skillItem}>
									<div className={styles.skillIconWrapper}>
										<img src={skill.icon} alt={skill.title} />
									</div>
									<p>{skill.title}</p>
								</div>
							))}
						</div>
					</div>

					{/* Creative Skills */}
					<div className={styles.skillCategory}>
						<h4 className={styles.categoryTitle}>Creative</h4>
						<div className={styles.skillsList}>
							{allSkills.creative.map((skill, index) => (
								<div key={index} className={styles.skillItem}>
									<div className={styles.skillIconWrapper}>
										<img src={skill.icon} alt={skill.title} />
									</div>
									<p>{skill.title}</p>
								</div>
							))}
						</div>
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
