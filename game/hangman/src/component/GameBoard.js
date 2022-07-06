/* eslint-disable import/no-anonymous-default-export */
import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";
import { useState } from 'react';

export default function ({ secretWord, maxErrors, isShown, category }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCnt, setErrorCnt] = useState(0);
  
  const letterGuessedHandler = (letter) => {
    let val = letter.toLowerCase();
    
    setGuessedLetters(prev => [...prev, val]);

    if (secretWord.toLowerCase().indexOf(val) === -1) {
      setErrorCnt(prev => prev + 1);
    }
  };
  return (
    <div className={isShown ? '' : 'hidden'}>
      <div>
        남은 횟수 : {maxErrors - errorCnt} <br/>
        카테고리 : {category}<br/><br/>
      </div>
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters}//{['a','r']}
      />
      <ButtonGrid 
        letterGuessed={letterGuessedHandler}
        secretWord={secretWord}
        isShown={errorCnt < maxErrors}
      />
    </div>
  );
}


