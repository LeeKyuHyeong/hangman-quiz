import './App.css';
import GameBoard from './component/GameBoard'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Hangman!</h1>
      <p>Do you wanna play game?</p>
      <div>
        <GameBoard secretWord="React" maxErrors={6} />
      </div>
    </div>
  );
}

export default App;
