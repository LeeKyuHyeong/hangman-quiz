import TdMaker from "./TdMaker";



function TrMaker(props) {
  return (
    <tr>
      <td className="score">{props.score}점</td>
      <TdMaker title={props.title} score={props.score}/>
      <TdMaker title={props.title} score={props.score}/>
      <TdMaker title={props.title} score={props.score}/>
      <TdMaker title={props.title} score={props.score}/>
      <TdMaker title={props.title} score={props.score}/>
    </tr>
  );

}
export default TrMaker;