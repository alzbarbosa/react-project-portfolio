import React from 'react'
import SkillDetails from './SkillDetails'

const SkillsList = () => {
  return (
    <>
    <section>
        <h5>Skills learned so far</h5>
        <h2>My Coding Skills</h2>

        <div className="skills-container">

            <div>
                <h3>Frontend Development</h3>
                <div className="skills-content">
                    <SkillDetails 
                    name="Html"
                    level="Advanced"
                    />

                    <SkillDetails 
                    name="CSS"
                    level="Advanced"
                    />

                    <SkillDetails 
                    name="Javascript"
                    level="Advanced"
                    />

                    <SkillDetails 
                    name="React"
                    level="Advanced"
                    />

                    <SkillDetails 
                    name="Bootstrap"
                    level="Advanced"
                    />
                </div>
            </div>


            <div>
                <h3>Backend Development</h3>
                <div className="skills-content">
                <SkillDetails 
                    name="Node"
                    level="Advanced"
                    />

                    <SkillDetails 
                    name="MongoDB"
                    level="Advanced"
                    />

                    <SkillDetails 
                    name="Express"
                    level="Advanced"
                    />

                    <SkillDetails 
                    name="Firebase"
                    level="Advanced"
                    />

                    <SkillDetails 
                    name="Redux"
                    level="Advanced"
                    />

                </div>

            </div>

        </div>

        
    </section>
    </>
  )
}

export default SkillsList