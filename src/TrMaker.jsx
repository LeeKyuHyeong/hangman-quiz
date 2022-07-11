import TdMaker from "./TdMaker";



function TrMaker(props) {
  let tdMaker = props.keyword.map((e, i) => 
    <TdMaker title = {props.title[i]} score={props.score} keyword={e} />
  );
  return (
    <tr>
      <td className="score">{props.score}점</td>
      {/* <TdMaker title={props.title} score={props.score} />
      <TdMaker title={props.title} score={props.score} />
      <TdMaker title={props.title} score={props.score} />
      <TdMaker title={props.title} score={props.score} />
      <TdMaker title={props.title} score={props.score} />  */}
      {tdMaker}
    </tr>
  )

}
export default TrMaker;