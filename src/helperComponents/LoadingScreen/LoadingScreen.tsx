import React, { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ isAppLoaded, loadingProgress = 0 }) => {
	const [translateAmt, setTranslateAmt] = useState("0%");
	const [currentProgress, setCurrentProgress] = useState(0);

	useEffect(() => {
		// Update progress smoothly
		if (loadingProgress > currentProgress) {
			const increment = Math.min(loadingProgress - currentProgress, 5); // Smooth increment
			setCurrentProgress((prev) => Math.min(prev + increment, loadingProgress));
		}
	}, [loadingProgress, currentProgress]);

	useEffect(() => {
		if (isAppLoaded) {
			// Ensure progress reaches 100% before hiding
			setCurrentProgress(100);
			setTimeout(() => {
				setTranslateAmt("200%"); // Move the loading screen right
			}, 500); // Shorter delay since we have real progress
		}
	}, [isAppLoaded]);

	return (
		<div
			style={{
				transform: `translateX(${translateAmt})`,
				transition: "transform 0.5s ease-in-out", // Smooth transition for the exit animation
			}}
			className={styles.loadingScreen}
		>
			<div className={styles.helloWorldWrapper}>
				<p className={styles.helloWorld}>Hello World</p>
			</div>

			<div className={styles.loadingBar}>
				<div
					className={styles.loadingBarFill}
					style={{ width: `${currentProgress}%` }}
				></div>
				<div className={styles.loadingText}>{Math.round(currentProgress)}%</div>
			</div>
		</div>
	);
};

export default LoadingScreen;
