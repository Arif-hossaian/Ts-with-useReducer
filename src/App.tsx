import React from 'react';
import MyRouter from './routes';
import './styles/index.css';

const App = () => {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <MyRouter />
    </div>
  );
};

export default App;
