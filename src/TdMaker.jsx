import { useState } from "react";


export default function TdMaker(props) {
  const [isSelected, setIsSelected] = useState(false);

  let className = isSelected ? "selected" : "quest";

  return (
    <td className={className}>
      <a onClick={(e) => {
        e.preventDefault();
        setIsSelected(true);
      }}>{props.title} {props.score}점</a>
      
    </td>
  );
}