import React from "react";
import "./skills-list.style.scss";
import Skills from "../skills/skills.component";

const skills = [
  { skill: "Git", emoji: "🗂️" },
  { skill: "CSS", emoji: "🎨" },
  { skill: "React", emoji: "⚛️" },
  { skill: "HTML", emoji: "🌐" },
  { skill: "CI/CD", emoji: "🔄" },
  { skill: "GitHub", emoji: "🧑‍💻" },
  { skill: "Jenkins", emoji: "🔧" },
  { skill: "JavaScript", emoji: "🟨" },
  { skill: "TypeScript", emoji: "🟦" },
  { skill: "Microsoft Azure", emoji: "☁️" },
];

function SkillsList() {
  return (
    <div className="skills-list">
      {skills.map((sk, index) => (
        <Skills key={index} skill={sk.skill} emoji={sk.emoji} />
      ))}
    </div>
  );
}

export default SkillsList;
