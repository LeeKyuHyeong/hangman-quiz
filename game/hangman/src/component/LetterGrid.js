/* eslint-disable import/no-anonymous-default-export */
import Letter from "./Letter";

export default function ({ secretWord, guessedLetters }) {
  let letters = secretWord
    .split('')
    .map((element, index) => {
      return (<Letter value={element} isShown={guessedLetters.indexOf(element.toLowerCase()) > -1} key={index} />)
    });

  return <div className="flex">{letters}</div>;
}
