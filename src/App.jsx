import '../sass/_main.scss';
import Hero from '../app/hero.jsx'
import Header from '../app/header.jsx'
import ProjectCard from '../app/project.jsx'
import Skillset from '../app/skillset.jsx'
import Footer from '../app/footer.jsx'
import projectData from '../app/data.jsx'
import skillsetData from '../app/skillData.jsx'

function App() {
  const project = projectData.map(projectInfo => {
    return (
      <ProjectCard 
        key = {projectInfo.id}
        {...projectInfo}
      />
    )
  })

  const skillset = skillsetData.map(skill => {
    return (
      <Skillset 
        key = {skill.id}
        {...skill}
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
      <div className='skillset__title'>Skillset</div>
      <div className='container-skillset'>
        {skillset}
      </div>
      <Footer />
    </div>
  )
}

export default App
