import { useState, useRef, useEffect } from "react";
import SectionTitle from "../../helperComponents/SectionTitle/SectionTitle";
import { allSkills, certifications } from "../../data/skillsData";
import styles from "./Skills.module.css";
import Tabs from "./Tabs/Tabs";
import PreviewStrip from "./PreviewStrip/PreviewStrip";
import SkillsList from "./SkillsList/SkillsList";
import CertificationsCarousel from "./CertificationsCarousel/CertificationsCarousel";
import CertificationsDialogCarousel from "./CertificationsDialogCarousel/CertificationsDialogCarousel";

const Skills = () => {
	const categoryOrder: Array<{ key: keyof typeof allSkills; label: string }> = [
		{ key: "frontend", label: "Frontend" },
		{ key: "backend", label: "Backend" },
		{ key: "devops", label: "DevOps" },
		{ key: "tools", label: "Tools" },
		{ key: "computerScience", label: "Comp Sci" },
	];
	const [activeIdx, setActiveIdx] = useState(0);
	const [direction, setDirection] = useState(0); // -1: left, 0: none, 1: right
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [selectedCertIndex, setSelectedCertIndex] = useState(0);
	const contentRef = useRef(null);
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const [panelHeight, setPanelHeight] = useState<string | number>("auto");

	// Improved transitions with direction detection
	const prevActiveIdx = useRef(activeIdx);
	useEffect(() => {
		setDirection(activeIdx > prevActiveIdx.current ? 1 : -1);
		prevActiveIdx.current = activeIdx;
	}, [activeIdx]);

	// Smooth height transition of the active panel
	useEffect(() => {
		if (!contentRef.current) return;
		const node = contentRef.current as HTMLDivElement;
		const update = () => setPanelHeight(node.getBoundingClientRect().height + "px");
		const observer = new ResizeObserver(() => update());
		observer.observe(node);
		update();
		return () => observer.disconnect();
	}, [activeIdx]);

	// Dialog functions
	function openCertDialog(certIndex: number) {
		setSelectedCertIndex(certIndex);
		setIsDialogOpen(true);
		setIsClosing(false);
	}

	function closeCertDialog() {
		setIsClosing(true);
		setTimeout(() => {
			setIsDialogOpen(false);
			setIsClosing(false);
		}, 200);
	}

	// Handle click outside to close
	const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === dialogRef.current) {
			closeCertDialog();
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
			<SectionTitle title="SKILLS" speed="normal" direction="left" />
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
					<div className={styles.panelHeightWrapper} style={{ height: panelHeight }}>
						<div
							ref={contentRef}
							key={activeIdx}
							className={`${styles.activePanel} ${
								direction === 1
									? styles.slideInRight
									: direction === -1
									? styles.slideInLeft
									: ""
							}`}
						>
							{/* Left vertical preview */}
							<PreviewStrip side="left" categories={leftCategories} />

							{/* Active centered panel */}
							<SkillsList skills={allSkills[categoryOrder[activeIdx].key]} />

							{/* Right vertical preview */}
							<PreviewStrip side="right" categories={rightCategories} />
						</div>
					</div>
				</div>

				{/* Certifications Carousel */}
				<div className={styles.certificationsSection}>
					<h4 className={styles.certificationsTitle}>Certifications & Education</h4>
					<CertificationsCarousel
						certifications={certifications}
						onCertClick={openCertDialog}
					/>
				</div>
			</div>

			{/* Certifications Dialog */}
			{isDialogOpen && (
				<dialog
					ref={dialogRef}
					className={`${styles.modal} ${isClosing ? styles.closing : ""}`}
					onClick={handleDialogClick}
				>
					<div>
						<CertificationsDialogCarousel
							certifications={certifications}
							startingIndex={selectedCertIndex}
						/>
					</div>
					<form method="dialog">
						<button
							className={`circleButton ${styles.modalCloseButton}`}
							type="button"
							onClick={closeCertDialog}
							style={{ width: "40px" }}
						>
							<p> &times;</p>
						</button>
					</form>
				</dialog>
			)}
		</section>
	);
};

export default Skills;
