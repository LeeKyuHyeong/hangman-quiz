/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';

export default function ({ value, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  let className = isClicked ? 'button guessed' : 'button';

  const clickHandler = () => {
    setIsClicked((prev) => !prev);
    onClick(value);
  }
  return (
    <button className={className} onClick={clickHandler} >{value}</button>
  );
}
