import React from 'react'
import { Element } from 'react-scroll'
import skillImg from '../../assets/Image1.jpg'
// import LinearProgress from '@material-ui/core/LinearProgress'
import LinearProgress from '@mui/material/LinearProgress';
import './SkillContainer.css'


const SkillContainer = () => {
  return (
    <Element className='SkillContainer' id='skills'>
        <div className='SkillContainer__image'>
          <img src={skillImg} alt="" />
       </div>
       <div className='SkillContainer__text'>
        <h2>SKILLSET</h2>

        <div className='SkillContainer__skillSet'>
          <h5>React</h5>
          <div className='SkillContainer__slider SkillContainer__slider1'>
            <LinearProgress variant="determinate" value={70} />

          </div>

        </div>

        <div className='SkillContainer__skillSet'>
          <h5>Javascript</h5>
          <div className='SkillContainer__slider SkillContainer__slider2'>
            <LinearProgress variant="determinate" value={80} />

          </div>

        </div>

        <div className='SkillContainer__skillSet'>
          <h5>CSS</h5>
          <div className='SkillContainer__slider SkillContainer__slider3'>
            <LinearProgress variant="determinate" value={80} />

          </div>

        </div>

        <div className='SkillContainer__skillSet'>
          <h5>HTML</h5>
          <div className='SkillContainer__slider SkillContainer__slider4'>
            <LinearProgress variant="determinate" value={90} />

          </div>

        </div>

       </div>

    </Element>
  )
}

export default SkillContainer