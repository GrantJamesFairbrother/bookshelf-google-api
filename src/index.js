import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import BookState from './context/BookState';

ReactDOM.render(
  <BookState>
    <App />
  </BookState>,
  document.getElementById('root')
);
