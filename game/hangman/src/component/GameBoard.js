/* eslint-disable import/no-anonymous-default-export */
import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";

export default function ({ secretWord }) {
  return (
    <div>
      <LetterGrid secretWord={secretWord} guessedLetters={["a", "r"]} />
      <ButtonGrid />
    </div>
  );
}


