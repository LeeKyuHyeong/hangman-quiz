/* eslint-disable no-restricted-globals */
import "./App.css";
import TrMaker from "./TrMaker";

function App() {
  const score = [
    5, 4, 3, 2, 1
  ];
  const title = [
    '역사', '상식', '넌센스', '가요', '초성'
  ];
  const quizTbl = [
    {
      id: 1,
      title: '5점',
      keyword: ['역사 순서', '전쟁', '근본 넌센스', '80년대 노래', '과자',]
    },
    {
      id: 2,
      title: '4점',
      keyword: ['세계사', '사회', '물건', '90년대 노래', '영화',]
    },
    {
      id: 3,
      title: '3점',
      keyword: ['일본', '배구', '고기', '리메이크 노래', '드라마',]
    },
    {
      id: 4,
      title: '2점',
      keyword: ['중국', '축구', '개수', '20년대 노래', '00년대 노래',]
    },
    {
      id: 5,
      title: '1점',
      keyword: ['역사 o/x', '상식 o/x', '넌센스 o/x', '10년대 노래', '우리나라 도시',]
    }
  ];

  var makeTh = title.map((element, index) =>
    <th key={index}>{element}</th>
  );

  var makeTr = score.map((element, index) =>
    <TrMaker title={title} score={element} keyword={quizTbl[index].keyword} />
  );

  return (
    <div className="App">
      <h2>퀴즈퀴즈 타임</h2>
      <button className="btn_refresh" onClick={(e) => {
        e.preventDefault();
        history.go(0);
      }}>새로고침</button>
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