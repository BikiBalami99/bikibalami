import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import linkedinLogo from "/assets/images/linkedinLogo.png";
import githubLogo from "/assets/images/githubLogo.png";
import PrimaryButton from "../../helperComponents/PrimaryButton/PrimaryButton";

const Hero = () => {
	const [isDialogOn, setIsDialogOn] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [pdfError, setPdfError] = useState(false);
	const resumeDialogRef = useRef();

	useEffect(() => {
		if (isDialogOn) {
			resumeDialogRef.current.showModal();
			// Disable body scroll without hiding elements
			document.body.style.overflow = "hidden";
		} else {
			resumeDialogRef.current.close();
			// Re-enable body scroll
			document.body.style.overflow = "auto";
		}
	}, [isDialogOn]);

	function handleDownloadResume() {
		const link = document.createElement("a");
		link.href = "/assets/Resume/Resume_BikiBalami.pdf";
		link.download = "Resume_BikiBalami.pdf";
		link.click();
	}

	function handlePdfError() {
		setPdfError(true);
	}

	function handlePdfLoad() {
		setPdfError(false);
	}

	function closeResumeDialog() {
		setIsClosing(true);
		setTimeout(() => {
			setIsDialogOn(false);
			setIsClosing(false);
			setPdfError(false);
		}, 200);
	}

	// Handle click outside to close
	const handleDialogClick = (e) => {
		if (e.target === resumeDialogRef.current) {
			closeResumeDialog();
		}
	};

	return (
		<section className={styles.hero}>
			<section className={styles.left}>
				<h3>Biki Balami</h3>
				<h2>FULL STACK DEVELOPER</h2>
				<h2>TECHNICAL TEAM LEAD</h2>
				<p className={styles.email}>bikibalami1999@gmail.com</p>
				<div className={styles.heroDescription}>
					<span>Next.js 13+ | </span>
					<span>TypeScript | </span>
					<span>AWS </span>
				</div>
				<p className={styles.scrollDown}>{"(Scroll Down)"}</p>
			</section>

			<section className={styles.right}>
				{/* Swapped the class names to reflect the new order */}
				<article className={styles.rightTop}>
					<p>
						<strong>Origin:</strong> Kathmandu, Nepal
					</p>
					<p>
						<strong>Residing:</strong> Tokyo, Japan
					</p>
					<p>
						<strong>Focus:</strong> Next.js 13+, TypeScript, AWS, Team Leadership
					</p>
				</article>

				<section className={styles.rightBottom}>
					<div className="socialLinks">
						<div className="socialsLinkIcon">
							<a
								href="https://www.linkedin.com/in/biki-balami-1bb9281a3/"
								target="_blank"
							>
								<img src={linkedinLogo} />
							</a>
						</div>
						<div className="socialsLinkIcon">
							<a href="https://github.com/BikiBalami99" target="_blank">
								<img src={githubLogo} />
							</a>
						</div>
					</div>
					<PrimaryButton
						onClick={() => {
							setIsDialogOn(true);
							setIsClosing(false);
						}}
					>
						Resume
					</PrimaryButton>
				</section>
			</section>

			<dialog
				ref={resumeDialogRef}
				className={`${styles.resumeDialog} ${isClosing ? styles.closing : ""}`}
				onClick={handleDialogClick}
			>
				<div className={styles.resumeModalHeading}>
					<h1>Resume</h1>
					<p>
						{pdfError
							? "Preview unavailable. Download below."
							: "View online or download for offline access."}
					</p>
					<PrimaryButton onClick={handleDownloadResume}>Download Resume</PrimaryButton>
				</div>

				{!pdfError ? (
					<iframe
						className={styles.resume}
						src="/assets/Resume/Resume_BikiBalami.pdf"
						type="application/pdf"
						width="100%"
						height="100%"
						title="Biki Balami Resume"
						onError={handlePdfError}
						onLoad={handlePdfLoad}
					/>
				) : (
					<div className={styles.pdfFallback}>
						<p>PDF preview unavailable</p>
						<p>Please use the download button above to view the resume</p>
					</div>
				)}

				<form method="dialog">
					<button
						onClick={closeResumeDialog}
						className={`${styles.closeButton} circleButton`}
					>
						<p>&times;</p>
					</button>
				</form>
			</dialog>
		</section>
	);
};

export default Hero;
