function Skills({ skill, emoji }) {
  return (
    <div className="skill">
      <span className="emoji">{emoji} - </span>
      <span className="skill-name">{skill}</span>
    </div>
  );
}

export default Skills;
