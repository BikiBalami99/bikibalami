import Footer from "./components/Footer/Footer";
import MyStory from "./components/MyStory/MyStory";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./global.css";

function App() {
  return (
    <div className="ultimate-wrapper">
      <header>
        <Navbar />
      </header>

      <main>
        <Projects />
        <Skills />
        <MyStory />
      </main>

      <Footer />
    </div>
  );
}

export default App;
