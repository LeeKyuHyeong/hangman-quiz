import './App.css';
import GameBoard from './component/GameBoard'
import WordSelect from './component/WordSelect'
import { useState } from 'react';
import RandomWord from './component/RandomWord';

function App() {
  const [secretWord, setSecretWord] = useState('');

  return (
    <div className="App">
      <h1>Welcome to Hangman!</h1>
      <p>Do you wanna play game?</p>
      <div>
        <RandomWord onSet={(val) => setSecretWord(val)} />
        {/* <WordSelect onSet={(val) => setSecretWord(val)} isShown={!secretWord} /> */}
        <GameBoard secretWord={secretWord} maxErrors={6} isShown={secretWord} />
      </div>
    </div>
  );
}

export default App;
