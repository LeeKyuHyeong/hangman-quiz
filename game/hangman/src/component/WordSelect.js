import { useState } from "react";

function WordSelect({ isShown, onSet }) {
  const [secretWord, setSecretWord] = useState('');

  return (
    <div className={isShown ? '' : 'hidden'}>
      <input
        type="text"
        onChange={e => {
          setSecretWord(e.target.value)
        }}
      />
      <button
        onClick={e => {
          if (secretWord.length < 4) {
            alert('네글자 이상의 단어를 입력해주세요.');
            return;
          }
          onSet(secretWord)
        }}
      >Set Word</button>
    </div>
  );
}

export default WordSelect;