import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Projects />
      {/* <Skills /> */}
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
