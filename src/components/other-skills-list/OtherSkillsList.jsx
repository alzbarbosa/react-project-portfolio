import React from "react";

import "./other-skills-list-styles.css";
import SkillItem from "../skill-item/SkillItem";

const otherSkills = [
  "Great experience in problem solving, working with deadlines and teamwork",
  "Vast experience in customer service",
  "Great experience understanding different business to propose adequate financial support and services",
  "Experience in writing reports and doing presentation of products and services",
  "Able to handle great responsibilities",
];

const OtherSkillsList = () => {
  return (
    <>
      <section>
        <h5>Skills developed so far</h5>
        <h2>My Skills from past jobs</h2>
        <div className="skills-text-container">
          {otherSkills.map((skill, index) => (
            <SkillItem key={index} text={skill} />
          ))}
        </div>
      </section>
    </>
  );
};

export default OtherSkillsList;
