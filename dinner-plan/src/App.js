import "./App.css";
import Form from "./components/form/form.component";
import Logo from "./components/logo/logo.component";
import Stats from "./components/stats/stats.component";
import PackingList from "./components/packing-list/packing-list.component";
import React, { useState } from "react";
function App() {
  const [items, setItems] = useState([]);

  function handleAddNewItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddNewItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
