import './App.css'
import { IntroSection } from './components/IntroSection/IntroSection'
import { Navbar } from './components/Navbar/Navbar'
import { ProjectCard } from './components/Projects/ProjectCard'

function App() {

  return <>
    <Navbar />
    <IntroSection />
    <ProjectCard />
  </>
}

export default App
