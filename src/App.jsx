import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

import "./global.css";

function App() {
  return (
    <div className="ultimateWrapper">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>

      {/* <main>
        <Hero />
        <Projects />
        <Skills />
      </main>

      <Footer /> */}
    </div>
  );
}

export default App;
