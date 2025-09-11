import { useState, useRef, useEffect } from "react";
import SectionTitle from "../../helperComponents/SectionTitle/SectionTitle";
import { allSkills, certifications } from "../../data/skillsData";
import styles from "./Skills.module.css";
import Tabs from "./Tabs/Tabs";
import PreviewStrip from "./PreviewStrip/PreviewStrip";
import SkillsList from "./SkillsList/SkillsList";
import Certifications from "./Certifications/Certifications";
import CertificationModal from "./CertificationModal/CertificationModal";

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
				<Tabs
					categoryOrder={categoryOrder}
					activeIdx={activeIdx}
					onChange={setActiveIdx}
				/>

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
						<PreviewStrip side="left" categories={leftCategories} activeIdx={activeIdx} />

						{/* Active centered panel */}
						<h4 className={styles.categoryTitle}>{categoryOrder[activeIdx].label}</h4>
						<SkillsList skills={allSkills[categoryOrder[activeIdx].key]} />

						{/* Right vertical preview */}
						<PreviewStrip
							side="right"
							categories={rightCategories}
							activeIdx={activeIdx}
						/>
					</div>
				</div>

				{/* Certifications Collage */}
				<Certifications certifications={certifications} onSelect={openDialog} />

				{/* Fullscreen Modal */}
				<CertificationModal
					isOpen={isDialogOpen}
					isClosing={isClosing}
					dialogRef={dialogRef}
					certification={certifications[selectedCertIndex]}
					onClose={closeDialog}
					handleDialogClick={handleDialogClick}
				/>
			</div>
		</section>
	);
};

export default Skills;
