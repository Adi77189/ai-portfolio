import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Terminal from "./components/Terminal";
import GridBackground from "./components/GridBackground";
import SpotlightCursor from "./components/SpotlightCursor";
import MouseGlow from "./components/MouseGlow";
import FloatingOrbs from "./components/FloatingOrbs";
import Certifications from "./components/Certifications";
function App() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden relative min-h-screen">
      <MouseGlow />
      <FloatingOrbs />
      <GridBackground />
      <SpotlightCursor />
      <Navbar />
      <Hero />
      <About />
      <Terminal />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;