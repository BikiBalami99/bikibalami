import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

import "./global.css";

function App() {
  return (
    <div className="ultimateWrapper">
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
