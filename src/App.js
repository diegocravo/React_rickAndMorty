import "./App.css";
import CharacterList from "./components/CharacterList.js";
import NavBar from "./components/Navbar";
import Search from "./components/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          {/* <CharacterList /> */}
          <Route path="/search" component={Search} />
          <Route path="/home" component={CharacterList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
