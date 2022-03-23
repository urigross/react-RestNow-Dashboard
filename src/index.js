import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './assets/scss/global.scss'
import { RestNowHome } from './pages/RestNowHome';

ReactDOM.render(
  <React.StrictMode>
    <RestNowHome />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
