import logo from "./logo.svg";
import "./App.css";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

function App() {
  return (
    <div className="App">
      <SearchBox></SearchBox>
      <SearchResult></SearchResult>
    </div>
  );
}

export default App;
