import { useState } from "react";


export default function RandomWord({onSet, isShown}) {
  const [secretWord, setSecretWord] = useState('');
  let Words = [
    {
      id: 1,
      cate:'sports',
      exam:[
        'soccer', 'baseball', 'basketball', 'frisbee', 'hockey', 'volleyball'
      ]
    },
    {
      id: 2,
      cate:'fruits',
      exam:[
        'apple', 'orange', 'banana', 'melon', 'peach', 'watermelon'
      ]
    },
    {
      id: 3,
      cate:'countries',
      exam:[
        'korea', 'england', 'china', 'swiss', 'mexico', 'brazil'
      ]
    }
    
  ]

  let category = Words.map((cate, index) => (
    <button key={index} data-id={cate.id} onClick={(e) => {
      e.preventDefault();
      var num = e.target.getAttribute('data-id');
      var rnd = Math.floor(Math.random() * Words[num-1].exam.length);
      setSecretWord(Words[num-1].exam[rnd])
      console.log(secretWord);
      onSet(secretWord);

    }}>{cate.cate}</button>
  ))
  return(    
    <div className={isShown ? '' : 'hidden'}>
      <h4>Choose Category</h4>
      {category}
    </div>
  );
}