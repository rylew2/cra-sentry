import "./App.css";
import logo from "./logo.svg";

const obj = {};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={(c) => obj.methodDoesNotExist(c)}
        >
          Break the world
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
