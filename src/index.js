import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter_04/clock';
import CommentList from './chapter_05/CommentList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/signup';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';





const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      {/* <Library /> 
      <Clock />
      
      <Accommodate />
      <ConfirmButton />
      <LandingPage />
      <AttendanceBook />
      <SignUp />
      <Calculator />*/}
      <CommentList />
      <ProfileCard />
    </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
