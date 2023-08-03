
export default function RandomWord({ onSet, isShown }) {

  let Words = [
    {
      id: 1,
      cate: 'sports',
      exam: [
        'soccer', 'baseball', 'basketball', 'frisbee', 'hockey', 'volleyball', 'skating', 'frisbee', 'flowball', 'football', 'crosscountry', 'kinball', 'swimming', 'climing', 'e-sports', 'kayaking', 'pingpong', 'shorttrack', 'stacking', 'vicpie', 'handphone', 'smartphone', 'ttazza', 'hannibal', 'hangeul', 'standard', 'kiho', 'gijun', 'gwangyoung', 'jisoo', 'gunyoung', 'dongbin'
      ]
    },
    {
      id: 2,
      cate: 'fruits',
      exam: [
        'apple', 'orange', 'banana', 'melon', 'peach', 'watermelon', 'kiwi', 'tomato', 'grape', 'mango', 'papaya', 'coconut', 'pineapple', 'cherry', 'yuja', 'Mandarin', 'lime', 'blueberry', 'plum', 'avocado', 'pear', 'strawberry', 'guaba', 'chestnut', 'fig', 'pomegranate', 'quince', 'jujube', 'msoffice', 'hwp', 'excel', 'word', 'powerpoint', 'keyword', 'keyboard', 'headset', 'userInterface', 'logitech mx master 3s', 'logitech mx keys', 'LG moniter'
      ]
    },
    {
      id: 3,
      cate: 'countries',
      exam: [
        'Korea', 'England', 'China', 'Swiss', 'Mexico', 'Brazil', 'Japan', 'America', 'Russia', 'Mongole', 'Greece', 'UAE', 'France', 'Argentina', 'Bahrain', 'Cambodia', 'Canada', 'Chile', 'Denmark', 'India', 'Norway', 'Uruguay', 'Hungary', 'Georgia', 'Bolivia', 'Belgium', 'Guatemala', 'Moroco', 'Croatia', 'Cortdibuar', 'Soorinam', 'bietnam', 'valcan', 'macedonia', 'otawa', 'mesophotamia', 'egae', 'august', 'newton', 'einsewtein', 'prometeus', 'jeus', 'heracules', 'hades'
      ]
    }
  ]

  let _category = Words.map((element, index) => (
    <button className='btn_another' key={index} data-id={element.id}
      onClick={(e) => {
        e.preventDefault();

        var num = e.target.getAttribute('data-id');
        var rnd = Math.floor(Math.random() * Words[num - 1].exam.length);

        onSet(Words[num - 1].exam[rnd], element.cate);
      }}
    >{element.cate}</button>
  ));
  return (
    <div className={isShown ? '' : 'hidden'}>
      <h4>Choose Category</h4>
      {_category}
    </div>
  );
}