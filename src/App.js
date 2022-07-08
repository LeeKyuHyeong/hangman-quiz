import "./App.css";
import TrMaker from "./TrMaker";

function App() {
  const score = [
    5,4,3,2,1
  ];
  const quizTbl = [
    {
      id:1,
      title:'역사',
      score:score
    },
    {
      id:2,
      title:'상식',
      score:score
    },
    {
      id:3,
      title:'넌센스',
      score:score
    },
    {
      id:4,
      title:'가요',
      score:score
    },
    {
      id:5,
      title:'랩',
      score:score
    }
  ];
  var makeTh = quizTbl.map((element, index) => 
    <th key={index}>{element.title}</th>
  );

  var makeTr  = quizTbl[0].score.map((element) =>
    <TrMaker score={element} />
  )

  return (
    <div className="App">
      <table className="quizTbl">
        <tr>
          <th>/</th>
          {makeTh}          
        </tr>
        {makeTr}
        
      </table>
    </div>
  );
}
export default App;