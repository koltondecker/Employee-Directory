import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import SearchBar from './components/searchBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron />
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
