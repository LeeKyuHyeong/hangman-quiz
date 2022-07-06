/* eslint-disable import/no-anonymous-default-export */
import AnotherButton from "./AnotherButton";
import WordButton from "./WordButton";

export default function ({ letterGuessed, isShown, secretWord}) {
  
  let className = 'flex flex-wrap'
  className += !isShown ? ' hidden' : '';

  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let buttons = letters.map((letter, index) => (
    <WordButton value={letter} key={index} setLetter={letterGuessed} />
  ));
  return <div >
    <div className={className}>
      {buttons}
    </div>
    <div className={!className}>
      <AnotherButton secretWord={secretWord} />
    </div>
  </div>
}
