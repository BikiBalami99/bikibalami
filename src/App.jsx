import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./helperComponents/LoadingScreen/LoadingScreen";

import "./global.css";
import { useEffect, useState } from "react";

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  console.log(isAppLoaded);

  // Optionally trac specific images or fonts

  useEffect(() => {
    const images = Array.from(document.images);
    const totalImages = images.length;
    let loadedImages = 0;

    // Checking if all images have loaded
    images.forEach((image) => {
      if (image.complete) {
        loadedImages++;
      } else {
        image.onload = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setIsAppLoaded(true);
          }
        };
      }
    });

    if (totalImages === 0) {
      setIsAppLoaded(true);
    }

    console.log(isAppLoaded);
  }, []);

  return (
    <div className="ultimateWrapper">
      <LoadingScreen isAppLoaded={isAppLoaded} />
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
