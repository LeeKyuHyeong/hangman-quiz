/* eslint-disable import/no-anonymous-default-export */
import Letter from "./Letter";

export default function ({ secretWord, guessedLetters }) {
  let letters = secretWord
    .split('')
    .map((element, index) => {
      let isShown = guessedLetters.indexOf(element.toLowerCase()) > -1;
      return (<Letter value={element} isShown={isShown} key={index} />)
    });

  return <div className="flex">{letters}</div>;
}


