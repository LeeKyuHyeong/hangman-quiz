/* eslint-disable import/no-anonymous-default-export */

export default function (props) {
  return (
    <span className="letter">
      {props.isShown === true ? props.value : " "}
    </span>
  );
}
