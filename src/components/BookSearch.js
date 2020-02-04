import React, { useState, useContext } from 'react';
import BookContext from '../context/bookContext';

const BookSearch = () => {
  const [text, setText] = useState('');

  const bookContext = useContext(BookContext);

  const { getBooks } = bookContext;

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const searchText = text.replace(/ /g, '+');

    getBooks(searchText);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className='col-10 p-2 mt-2'
          type='text'
          placeholder='Search for a book'
          value={text}
          onChange={handleTextChange}
        />
        <button type='submit' className='btn btn-primary ml-2 mb-1 p-2'>
          Search
        </button>
      </form>
    </>
  );
};

export default BookSearch;
