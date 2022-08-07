
export default function RandomWord({ onSet, isShown }) {

  let Words = [
    {
      id: 1,
      cate: 'sports',
      exam: [
        'soccer', 'baseball', 'basketball', 'frisbee', 'hockey', 'volleyball', 'skating', 'frisbee', 'flowball', 'football', 'crosscountry', 'kinball', 'swimming', 'climing', 'e-sports'
      ]
    },
    {
      id: 2,
      cate: 'fruits',
      exam: [
        'apple', 'orange', 'banana', 'melon', 'peach', 'watermelon', 'kiwi', 'tomato', 'grape', 'mango', 'papaya', 'coconut', 'pineapple', 'cherry', 'yuja', 'Mandarin', 'lime', 'blueberry'
      ]
    },
    {
      id: 3,
      cate: 'countries',
      exam: [
        'Korea', 'England', 'China', 'Swiss', 'Mexico', 'Brazil', 'Japan', 'America', 'Russia', 'Mongole', 'Greece', 'UAE', 'France', 'Argentina', 'Bahrain', 'Cambodia', 'Canada'
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