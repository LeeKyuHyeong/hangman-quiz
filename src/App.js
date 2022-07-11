import "./App.css";
import TrMaker from "./TrMaker";

function App() {
  const score = [
    5,4,3,2,1
  ];
  const quizTbl = [
    {
      id:1,
      title:'역사'
    },
    {
      id:2,
      title:'상식'
    },
    {
      id:3,
      title:'넌센스'
    },
    {
      id:4,
      title:'가요'
    },
    {
      id:5,
      title:'랩'
    }
  ];
  var makeTh = quizTbl.map((element, index) => 
    <th key={index}>{element.title}</th>
  );

  var makeTr  = score.map((element,index) =>
    <TrMaker title={quizTbl[index].title} score={element} />
  );

  return (
    <div className="App">
      <h2>퀴즈퀴즈 타임</h2>
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