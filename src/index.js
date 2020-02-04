import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import BookState from './context/BookState';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <BookState>
    <Router>
      <App />
    </Router>
  </BookState>,
  document.getElementById('root')
);
