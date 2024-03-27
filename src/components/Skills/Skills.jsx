import React from "react";
import Skill from "../Skill/Skill";
import "./Style.css";

function Skills() {
  return (
    <div className="skills">
      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        alt="HTML Logo"
        title="HTML"
      />

      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        alt="CSS Logo"
        title="CSS"
      />

      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        alt="JavaScript Logo"
        title="Javascript"
      />

      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg"
        alt="Bootstrap Logo"
        title="Bootstrap"
      />

      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg"
        alt="Jquery Logo"
        title="Jquery"
      />

      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
        alt="NPM Logo"
        title="NPM"
      />

      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        alt="Node Logo"
        title="Node"
      />

      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        alt="React Logo"
        title="React"
      />

      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
        alt="Github Logo"
        title="GitHub"
      />

      <Skill
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        alt="Git Logo"
        title="Git"
      />
    </div>
  );
}

export default Skills;
