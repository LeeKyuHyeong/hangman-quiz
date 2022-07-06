/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';

export default function ({ value, setLetter }) {
  const [isClicked, setIsClicked] = useState(false);

  let className = isClicked ? 'button guessed' : 'button';

  const clickHandler = () => {
    //setIsClicked((prev) => !prev);
    setIsClicked(true);
    setLetter(value);
  }
  return (
    <button className={className} onClick={clickHandler} >{value}</button>
  );
}
