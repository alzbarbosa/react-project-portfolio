import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const SkillDetails = (props) => {
    const {name, level} = props
  return (
    <article className="skill-details">
                        <div class="skill-icon-checked">
                        <BsPatchCheckFill className="icon-checked" />
                        <h4 className='skill-name'>{name}</h4>
                        </div>
                        <small className="text-light">{level}</small>
                        
                    </article>
  )
}

export default SkillDetails