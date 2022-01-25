import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import Context from './context/Context';

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
);
