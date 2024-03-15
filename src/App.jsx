import './App.css';
import { IntroSection } from './components/IntroSection/IntroSection';
import { Navbar } from './components/Navbar/Navbar';
import { ProjectCard } from './components/Projects/ProjectCard';

function App() {
  return (
    <>
      <div className='nav-position'>
        <Navbar />
      </div>
      <IntroSection />
      <div className='grid'>
      <ProjectCard />
      </div>
    </>
  );
}

export default App;
