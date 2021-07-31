import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuizContextProvider from './contexts/QuizContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
