import './App.css';
import { Blog } from './components/Blog/Blog';
import { Contact } from './components/Contact/Contact';
import { IntroSection } from './components/IntroSection/IntroSection';
import { Navbar } from './components/Navbar/Navbar';
import { ProjectCard } from './components/Projects/ProjectCard';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <>
      <div className="nav-position">
        <Navbar />
      </div>
      <div className="padding-global">
        <IntroSection />
        <ProjectCard />
        <Skills />
        <Blog />
        <Contact />
      </div>
    </>
  );
}

export default App;
