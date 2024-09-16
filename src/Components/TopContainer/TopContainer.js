import {Element} from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import '../TopContainer/TopContainer.css'

const TopContainer = () => {
  return (
    <div>
    <Element name="about" className="TopContainer">
    <TopContent />
    </Element>
    </div>
  )
}

export default TopContainer