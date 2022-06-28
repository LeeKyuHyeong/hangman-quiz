import React from 'react';
import reactDOM from 'react-dom';

//const Helloworld = React.createContext('h1', null, 'Hello World!!');
function Helloworld(props) {
  return <h1>Hello World!! {props.name} 님 환영합니다.</h1>
}

reactDOM.render(
  <Helloworld name="규형"/>,
  document.getElementById('root')
)

