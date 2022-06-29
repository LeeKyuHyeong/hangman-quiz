/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';

export default function (props) {
  const [isClicked, setIsClicked] = useState(false);
  let className = isClicked ? 'guessed' : 'button';
  return (
    <button className={className} onClick={() => { setIsClicked((prev) => !prev) }} >{props.value}</button>
  );
}
