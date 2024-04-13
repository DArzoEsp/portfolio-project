import '../sass/_main.scss';
import Hero from '../app/hero.jsx'
import Header from '../app/header.jsx'
import ProjectCard from '../app/project.jsx'
import projectData from '../app/data.jsx'

function App() {
  const project = projectData.map(projectInfo => {
    return (
      <ProjectCard 
        key = {projectInfo.id}
        {...projectInfo}
      />
    )
  })

  return (
    <div className='main container' alt='main display'>
      <Header />
      <Hero />
      <div className='project__title'>My Projects</div>
      <div className='container-projects'>
        {project}
      </div>
    </div>
  )
}

export default App
