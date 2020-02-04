import React, { useContext } from 'react';
import BookContext from '../context/bookContext';
import BookSearch from './BookSearch';
import Book from './Book';

const SearchResults = () => {
  const bookContext = useContext(BookContext);

  const { searchResults } = bookContext;

  return (
    <div className='row'>
      <div className='col-12'>
        <BookSearch />
        <div className='d-flex align-items-start flex-wrap'>
          {searchResults &&
            searchResults.map(book => <Book book={book} key={book.id} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
