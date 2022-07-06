import { useState } from 'react';
import './App.css';
import GameBoard from './component/GameBoard';
import RandomWord from './component/RandomWord';

function App() {
  const [secretWord, setSecretWord] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="App">
      <h1>Welcome to Hangman!</h1>
      <p>Do you wanna play game?</p>
      <div>
        <RandomWord 
          onSet={(val, cate) => {
            setSecretWord(val);
            setCategory(cate);
            }}
          isShown={!secretWord} />
        {/* <WordSelect onSet={(val) => setSecretWord(val)} isShown={!secretWord} /> */}
        <GameBoard secretWord={secretWord} maxErrors={6} isShown={secretWord} category={category}/>
      </div>
    </div>
  );
}

export default App;
