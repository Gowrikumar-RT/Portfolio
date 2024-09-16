import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='TopContent'>
        <div className='TopContent__container'>
            <h1>S.Gowri</h1>
             {/* <p>Front End Developer</p> */}
            <a href='www.google.com'>
              <button className='TopContent__downloadButton'>Download CV</button>
              </a>
            <Link to='projects' smooth={true} duration={500}>
            <button className='TopContent__workButton'>My Work</button>
            </Link>
        </div>

    </div>
  )
}

export default TopContent