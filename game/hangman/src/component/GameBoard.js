/* eslint-disable import/no-anonymous-default-export */
import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";
import { useState } from 'react';

export default function ({ secretWord }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCnt, setErrorCnt] = useState(0);

  const letterGuessedHandler = (letter) => {
    let val = letter.toLowerCase();
    setGuessedLetters(prev => [...prev, val]);

    if (secretWord.toLowerCase().indexOf(val) === -1) {
      setErrorCnt(prev => prev + 1);
    }

  }
  return (
    <div>
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters}//{['a','r']}
      />
      <ButtonGrid letterGuessed={letterGuessedHandler} />
    </div>
  );
}


