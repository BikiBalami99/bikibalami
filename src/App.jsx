import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
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
