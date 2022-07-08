import TdMaker from "./TdMaker";



function TrMaker(props) {
  return (
    <tr>
      <td className="score">{props.score}점</td>
      <TdMaker title='역사' score={props.score}/>
      <TdMaker title='상식' score={props.score}/>
      <TdMaker title='넌센스' score={props.score}/>
      <TdMaker title='가요' score={props.score}/>
      <TdMaker title='랩' score={props.score}/>
    </tr>
  );

}
export default TrMaker;