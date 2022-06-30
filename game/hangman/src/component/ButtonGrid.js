/* eslint-disable import/no-anonymous-default-export */
import Button from "./Button";

export default function ({ letterGuessed, isShown }) {

  let className = 'flex flex-wrap'
  className += !isShown ? ' hidden' : '';

  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let buttons = letters.map((letter, index) => (
    <Button value={letter} key={index} setLetter={letterGuessed} />
  ));

  return <div className={className}>{buttons}</div>
}
