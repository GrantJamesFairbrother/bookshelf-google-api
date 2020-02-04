import React from 'react';
import '../App.css';
import SearchResults from './SearchResults';
import Header from './Header';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router';
import BookShelf from './BookShelf';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/' exact component={BookShelf} />
          <Route path='/search' exact component={SearchResults} />
        </Switch>
      </div>
    </>
  );
}

export default App;
