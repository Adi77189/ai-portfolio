import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
function App() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;