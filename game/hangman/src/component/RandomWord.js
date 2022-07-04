import { useState } from "react";


export default function RandomWord({onSet}) {
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
      setSecretWord(() => {
        
      })
      onSet(secretWord);

    }}>{cate.cate}</button>
  ))
  return(    
    <div>
      <h4>Choose Category</h4>
      {category}
    </div>
  );
}