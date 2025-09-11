import { useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Art from "./Components/Art/Art";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./helperComponents/LoadingScreen/LoadingScreen";
import RippleEffect from "./helperComponents/RippleEffect/RippleEffect";

import "./global.css";

function App() {
	const [isAppLoaded, setIsAppLoaded] = useState(false);
	const [loadingProgress, setLoadingProgress] = useState(0);

	useEffect(() => {
		// Disable scrolling and hide scrollbar during initial splash
		document.body.style.overflow = "hidden";

		const MIN_DISPLAY_MS = 600; // avoid flicker but keep snappy
		const start = performance.now();

		// Drive a time-based progress up to 90%
		let rafId: number | null = null;
		const tick = () => {
			const elapsed = performance.now() - start;
			const progress = Math.min(90, (elapsed / MIN_DISPLAY_MS) * 90);
			setLoadingProgress(progress);
			if (progress < 90 && !isAppLoaded) {
				rafId = requestAnimationFrame(tick);
			}
		};
		rafId = requestAnimationFrame(tick);

		const finish = () => {
			const elapsed = performance.now() - start;
			const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
			setTimeout(() => {
				setLoadingProgress(100);
				setIsAppLoaded(true);
			}, remaining);
		};

		// Prefer the 'load' event so we don't wait on lazy images
		if (document.readyState === "complete") {
			finish();
		} else {
			window.addEventListener("load", finish, { once: true });
		}

		// Hard cap fallback
		const fallbackTimer = setTimeout(finish, 4000);

		return () => {
			if (rafId !== null) cancelAnimationFrame(rafId);
			clearTimeout(fallbackTimer);
			window.removeEventListener("load", finish);
		};
	}, [isAppLoaded]);

	useEffect(() => {
		if (isAppLoaded) {
			// Re-enable scrolling sooner for better UX
			setTimeout(() => {
				document.body.style.overflow = "auto";
			}, 400);
		}
	}, [isAppLoaded]);

	return (
		<div className="ultimateWrapper">
			<LoadingScreen isAppLoaded={isAppLoaded} loadingProgress={loadingProgress} />
			<RippleEffect />
			<Navbar />
			<main>
				<Hero />
				<Skills />
				<Projects />
				<Art />
			</main>
			<Footer />
		</div>
	);
}

export default App;
