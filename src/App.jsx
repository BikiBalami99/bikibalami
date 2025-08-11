import { useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./helperComponents/LoadingScreen/LoadingScreen";
import RippleEffect from "./helperComponents/RippleEffect/RippleEffect";

import "./global.css";

function App() {
	const [isAppLoaded, setIsAppLoaded] = useState(false);
	const [loadingProgress, setLoadingProgress] = useState(0);

	useEffect(() => {
		// Disable scrolling and hide scrollbar
		document.body.style.overflow = "hidden";

		// Track loading progress
		let totalResources = 0;
		let loadedResources = 0;

		// Function to update progress
		const updateProgress = () => {
			const progress = totalResources > 0 ? (loadedResources / totalResources) * 100 : 0;
			setLoadingProgress(Math.min(progress, 99)); // Cap at 99% until everything is loaded
		};

		// Track images
		const images = Array.from(document.images);
		totalResources += images.length;

		images.forEach((image) => {
			if (image.complete) {
				loadedResources++;
				updateProgress();
			} else {
				image.onload = () => {
					loadedResources++;
					updateProgress();
					checkIfAllLoaded();
				};
				image.onerror = () => {
					loadedResources++; // Count errors as loaded to avoid infinite loading
					updateProgress();
					checkIfAllLoaded();
				};
			}
		});

		// Track other resources (CSS, JS, etc.)
		const resources = Array.from(
			document.querySelectorAll('link[rel="stylesheet"], script[src]')
		);
		totalResources += resources.length;

		resources.forEach((resource) => {
			if (resource instanceof HTMLLinkElement && resource.sheet) {
				loadedResources++;
				updateProgress();
			} else {
				// For resources that don't have clear loading states, simulate loading
				setTimeout(() => {
					loadedResources++;
					updateProgress();
					checkIfAllLoaded();
				}, Math.random() * 1000 + 500); // Random delay between 500-1500ms
			}
		});

		// If no resources to load, set progress to 100%
		if (totalResources === 0) {
			setLoadingProgress(100);
			setTimeout(() => {
				setIsAppLoaded(true);
			}, 1000);
		}

		// Check if all resources are loaded
		const checkIfAllLoaded = () => {
			if (loadedResources >= totalResources) {
				setLoadingProgress(100);
				setTimeout(() => {
					setIsAppLoaded(true);
				}, 500);
			}
		};

		// Fallback: if loading takes too long, force completion
		const fallbackTimer = setTimeout(() => {
			if (!isAppLoaded) {
				setLoadingProgress(100);
				setIsAppLoaded(true);
			}
		}, 10000); // 10 second fallback

		return () => {
			clearTimeout(fallbackTimer);
		};
	}, [isAppLoaded]);

	useEffect(() => {
		if (isAppLoaded) {
			// Re-enable scrolling after loading screen finishes
			setTimeout(() => {
				document.body.style.overflow = "auto";
			}, 1000); // Match this duration with the animation time
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
			</main>
			<Footer />
		</div>
	);
}

export default App;
