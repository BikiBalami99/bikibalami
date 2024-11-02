import Footer from "./components/Footer/Footer";
import MyStory from "./components/MyStory/MyStory";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
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
