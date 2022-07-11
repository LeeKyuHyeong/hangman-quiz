import "./App.css";
import TrMaker from "./TrMaker";

function App() {
  const score = [
    5, 4, 3, 2, 1
  ];
  const quizTbl = [
    {
      id: 1,
      title: '역사',
      keyword: ['역사 5점키워드','4점키워드','3점키워드','2점키워드','1점키워드',]
    },
    {
      id: 2,
      title: '상식',
      keyword: ['상식 5점키워드','4점키워드','3점키워드','2점키워드','1점키워드',]
    },
    {
      id: 3,
      title: '넌센스',
      keyword: ['넌센스 5점키워드','4점키워드','3점키워드','2점키워드','1점키워드',]
    },
    {
      id: 4,
      title: '가요',
      keyword: ['가요 5점키워드','4점키워드','3점키워드','2점키워드','1점키워드',]
    },
    {
      id: 5,
      title: '랩',
      keyword: ['랩 5점키워드','4점키워드','3점키워드','2점키워드','1점키워드',]
    }
  ];
  var makeTh = quizTbl.map((element, index) =>
    <th key={index}>{element.title}</th>
  );

  var makeTr  = score.map((element,index) =>
    <TrMaker title={quizTbl[index].title} score={element} keyword={quizTbl[index].keyword} />
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