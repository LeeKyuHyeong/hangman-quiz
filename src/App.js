import "./App.css";
import TrMaker from "./TrMaker";

function App() {
  const score = [
    5, 4, 3, 2, 1
  ];
  const title = [
    '역사','상식','넌센스','가요','랩'
  ];
  const quizTbl = [
    {
      id: 1,
      title: '5점',
      keyword: ['역사 순서','일반','근본 넌센스','80년대 노래','빠른랩',]
    },
    {
      id: 2,
      title: '4점',
      keyword: ['상식 4점키워드','4점키워드','4점키워드','4점키워드','4점키워드',]
    },
    {
      id: 3,
      title: '3점',
      keyword: ['넌센스 3점키워드','3점키워드','3점키워드','3점키워드','3점키워드',]
    },
    {
      id: 4,
      title: '2점',
      keyword: ['가요 2점키워드','2점키워드','2점키워드','2점키워드','2점키워드',]
    },
    {
      id: 5,
      title: '1점',
      keyword: ['랩 1점키워드','1점키워드','1점키워드','1점키워드','1점키워드',]
    }
  ];

  var makeTh = title.map((element, index) =>
    <th key={index}>{element}</th>
  );

  var makeTr  = score.map((element,index) =>
    <TrMaker title={title} score={element} keyword={quizTbl[index].keyword} />
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