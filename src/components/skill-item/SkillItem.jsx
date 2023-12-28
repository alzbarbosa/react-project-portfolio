import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import "./skill-item-styles.css";

const SkillItem = ({ text }) => {
  return (
    <article className="skill-details">
      <div className="skill-icon-checked">
        <BsPatchCheckFill className="icon-checked" id="icon-checked" />
        <h4 className="skill-text">{text}</h4>
      </div>
    </article>
  );
};

export default SkillItem;
