/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */

export default function (props) {
  const clickShowAnswer = () => {
    if (confirm("정답을 보시겠습니까?")) {
      alert("정답 : " + props.secretWord + " 입니다.");
    } else return;
  };
  const clickReset = () => {};
  return (
    <div>
      <button className={"btn_another"} onClick={clickShowAnswer}>
        answer
      </button>
      <button className={"btn_another"} onClick={clickReset}>
        reset
      </button>
    </div>
  );
}
