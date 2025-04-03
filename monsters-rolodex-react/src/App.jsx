import { useState, useEffect } from "react"; // hooks
import CardList from "./components/card-list/card-list";
import Search from "./components/search/search";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchMonster, setSearchMonster] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
        setSearchMonster(data);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFieldString);
    });
    setSearchMonster(newFilteredMonsters);
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">Monsters Rolodex</h1>
        <div className="game-subtitle">Find Your Monster</div>
      </div>
      <div className="game-content">
        <Search onChangeHandler={onSearchChange} />
        <CardList monsters={searchMonster} />
      </div>
    </div>
  );
};

export default App;
