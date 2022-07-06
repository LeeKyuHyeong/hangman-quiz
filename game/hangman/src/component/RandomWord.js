
export default function RandomWord({onSet, isShown}) {
  
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

  let _category = Words.map((element, index) => (
    <button key={index} data-id={element.id} 
      onClick={(e) => {
        e.preventDefault();
        
        var num = e.target.getAttribute('data-id');
        var rnd = Math.floor(Math.random() * Words[num-1].exam.length);
        
        onSet(Words[num-1].exam[rnd], element.cate);
      }}
    >{element.cate}</button>
  ));
  return(    
    <div className={isShown ? '' : 'hidden'}>
      <h4>Choose Category</h4>
      {_category}
    </div>
  );
}