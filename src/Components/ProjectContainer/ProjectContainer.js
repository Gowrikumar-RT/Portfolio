import React from 'react'

const ProjectContainer = () => {

  const client_projects = [
    {
        link:'https://github.com/Gowrikumar-RT/HTMLActorPage.git',
        title:'Html Project',
        desc:'This project is an interactive portfolio website built with HTML, CSS, and JavaScript.'
    },
    {
        link:'https://github.com/Gowrikumar-RT/HTMLActorPage.git',
        title:'Html Project',
        desc:'This project is an interactive portfolio website built with HTML, CSS, and JavaScript.'
    },
    {
        link:'https://github.com/Gowrikumar-RT/HTMLActorPage.git',
        title:'Html Project',
        desc:'This project is an interactive portfolio website built with HTML, CSS, and JavaScript.'
    }
  ]

  return (
    <Element className='projectContainer' id='projects'>
        <h1>Projects</h1>
        <p>Here are some projects which I done for making lives of people say</p>
    <div className='projectContainer-projects'>

    </div>
    </Element>
  )
}

export default ProjectContainer