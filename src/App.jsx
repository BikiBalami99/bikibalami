import Footer from "./visibleComponents/Footer/Footer";
import Hero from "./visibleComponents/Hero/Hero";
import Navbar from "./visibleComponents/Navbar/Navbar";
import Projects from "./visibleComponents/Projects/Projects";
import Skills from "./visibleComponents/Skills/Skills";
import "./global.css";

function App() {
  return (
    <div className="ultimate-wrapper">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}

export default App;
