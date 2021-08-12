import './App.css';
import CharacterList from './components/CharacterList.js';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/characters" component={CharacterList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
