import React from 'react'

import SkillDescription from './SkillDescription'

const SkillsOthers = () => {
  return (
    <>
    <section>
        <h5>Skills developed so far</h5>
        <h2>My Skills from past jobs</h2>
                <div className="skills-text-container">
                    <SkillDescription 
                    text="Great experience in problem solving, working with deadlines and teamwork"
                    />

                    <SkillDescription 
                    text="Vast experience in customer service"
                    />

                    <SkillDescription 
                    text="Great experience understanding different business to propose adequate financial support and services"
                    />
                    <SkillDescription 
                    text="Experience in writing reports and doing presentation of products and services"
                    />
                    <SkillDescription 
                    text="Able to handle great responsabilities"
                    />
                </div>
    </section>
    </>
  )
}

export default SkillsOthers