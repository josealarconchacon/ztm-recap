import "./App.css";
import Form from "./components/form/form.component";
import Logo from "./components/logo/logo.component";
import Stats from "./components/stats/stats.component";
import PackingList from "./components/packing-list/packing-list.component";

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
