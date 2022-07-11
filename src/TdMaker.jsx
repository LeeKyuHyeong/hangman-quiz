import { useState } from "react";


export default function TdMaker(props) {
  const [isSelected, setIsSelected] = useState(false);

  let className = isSelected ? "selected" : "quest";

  return (
    <td className={className} onClick={() => {
      setIsSelected(true);
    }}>
      <div className="card_wrap">
      {/* <a onClick={(e) => {
        e.preventDefault();
        setIsSelected(true);
      }}>{props.title} {props.score}점</a>
      <a>키워드 : </a> */}
        <div>
          <p className="front card">{props.title} {props.score}점</p>
        </div>
        <div>
          <p className="back card">{props.keyword}</p>          
        </div>
      </div>
    </td>
  );
}