import logo from './logo.svg';
import './App.css';
import githubPNG from './github.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={githubPNG} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
