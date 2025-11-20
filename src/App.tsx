import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import bgImage from "./assets/bg.png";

export default function App() {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen text-white">
        <Header />
        <main className="max-w-6xl mx-auto p-6 space-y-16">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
