import Avatar from "./components/avater/avatar.component";
import SkillsList from "./components/skills-list/skills-list.component";
import Bio from "./components/bio/bio.component";
import "./App.css";

function App() {
  return (
    <div className="card-container">
      <div className="card">
        <Avatar />
        <div className="data">
          <Bio />
          <SkillsList />
        </div>
      </div>
    </div>
  );
}

export default App;
