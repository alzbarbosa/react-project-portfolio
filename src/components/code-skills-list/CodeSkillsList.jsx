import React from "react";
import SkillItem from "../skill-item/SkillItem";
import "./code-skills-list-styles.css";

const programmingLanguages = [
  "Javascript",
  "Python",
  "Java",
  "C",
  "Html",
  "React",
];
const programmingKnowledge = [
  "CSS",
  "Bootstrap",
  "Node",
  "MongoDB",
  "Express",
  "Firebase",
  "Redux",
  "PyQt6",
];

const CodeSkillsList = () => {
  return (
    <>
      <section className="code-skills-list-container">
        <h5>Skills learned so far</h5>
        <h2>My Coding Skills</h2>

        <div className="skills-container">
          <div>
            <h3 className="code-skills-title">Programming Languages</h3>
            <div className="skills-content">
              {programmingLanguages.map((language) => (
                <SkillItem key={language} text={language} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="code-skills-title">Programming Knowledge</h3>
            <div className="skills-content">
              {programmingKnowledge.map((knowledge) => (
                <SkillItem key={knowledge} text={knowledge} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CodeSkillsList;
