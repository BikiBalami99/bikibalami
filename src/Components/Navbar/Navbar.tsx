import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import Hamburger from "../../helperComponents/Hamburger/Hamburger";
import LiquidGlassPanel from "../../helperComponents/LiquidGlassPanel";
import PrimaryButton from "../../helperComponents/PrimaryButton/PrimaryButton";
import LetsTalk from "../../helperComponents/LetsTalk/LetsTalk";

const Navbar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [letsTalkVisibility, setLetsTalkVisibility] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const letsTalkRef = useRef<HTMLDialogElement | null>(null);

	function toggleNavBarView() {
		setIsExpanded((prev) => !prev);
	}

	function openLetsTalkDialog() {
		setLetsTalkVisibility(true);
		setIsClosing(false);
	}

	function closeLetsTalkDialog() {
		setIsClosing(true);
		setTimeout(() => {
			setLetsTalkVisibility(false);
			setIsClosing(false);
		}, 200);
	}

	const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === letsTalkRef.current) {
			closeLetsTalkDialog();
		}
	};

	useEffect(() => {
		if (letsTalkVisibility && letsTalkRef.current) {
			letsTalkRef.current.showModal();
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else {
			if (letsTalkRef.current) {
				letsTalkRef.current.close();
			}
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
		}
	}, [letsTalkVisibility]);

	useEffect(() => {
		return () => {
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
		};
	}, []);

	return (
		<>
			<nav className={styles.navBar} data-expanded={isExpanded}>
				<LiquidGlassPanel
					className={styles.navBarGlass}
					chromaticAberration={4}
					depth={18}
					radius={16}
					strength={190}
				>
					<a href="#" className={styles.logo}>
						<h1>Biki Balami</h1>
					</a>

					<ul className={styles.navItems}>
						<Hamburger
							hideOnDesktop
							isOpen={isExpanded}
							toggleNavBarView={toggleNavBarView}
						/>

						<div className={styles.navLinks}>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#skills">Skills</a>
							</li>
							<li>
								<a href="#projects">Projects</a>
							</li>
							<li>
								<a href="#art">Art</a>
							</li>

							<li>
								<PrimaryButton
									onClick={openLetsTalkDialog}
									buttonModifierClass={{}}
									textModifierClass={{}}
									disabled={false}
								>
									Let's Talk
								</PrimaryButton>
							</li>
						</div>
					</ul>
				</LiquidGlassPanel>

				{letsTalkVisibility && (
					<dialog
						ref={letsTalkRef}
						className={`${styles.letsTalkModule} ${isClosing ? styles.closing : ""}`}
						onClick={handleDialogClick}
					>
						<LetsTalk onClose={closeLetsTalkDialog} />
						<form method="dialog">
							<button
								className={`circleButton ${styles.letsTalkCloseButton}`}
								onClick={closeLetsTalkDialog}
							>
								<p>&times;</p>
							</button>
						</form>
					</dialog>
				)}
			</nav>
		</>
	);
};

export default Navbar;
