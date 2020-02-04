import React, { useReducer, useEffect } from 'react';
import BookReducer from './BookReducer';
import BookContext from './bookContext';
import { GET_BOOKS } from './types';
import Axios from 'axios';

const BookState = props => {
  const initialState = {
    books: [
      {
        id: 'mulCyQEACAAJ',
        title: 'Harry Potter Knitting Magic',
        imageURL:
          'http://books.google.com/books/content?id=mulCyQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        shelf: 'currentlyReading'
      },
      {
        id: 'mulCyQEACAA',
        title: 'Harry Potter Knitting Magic',
        imageURL:
          'http://books.google.com/books/content?id=mulCyQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        shelf: 'wantToRead'
      },
      {
        id: 'mulCyQEACA',
        title: 'Harry Potter Knitting Magic',
        imageURL:
          'http://books.google.com/books/content?id=mulCyQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        shelf: 'read'
      },
      {
        id: 'mulCyQEAC',
        title: 'The Ultimate Guide to the Harry Potter Fandom',
        imageURL:
          'http://books.google.com/books/content?id=XsvkPykfkQkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        shelf: 'currentlyReading'
      },
      {
        id: 'mulCyQEA',
        title: 'The Ultimate Guide to the Harry Potter Fandom',
        imageURL:
          'http://books.google.com/books/content?id=XsvkPykfkQkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        shelf: 'wantToRead'
      },
      {
        id: 'mulCyQE',
        title: 'The Ultimate Guide to the Harry Potter Fandom',
        imageURL:
          'http://books.google.com/books/content?id=XsvkPykfkQkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        shelf: 'read'
      }
    ],
    searchResults: null
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  // Actions

  // Get Books
  const getBooks = async text => {
    const res = await Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}`
    );
    console.log(res.data.items);

    dispatch({ type: GET_BOOKS, payload: res.data.items });
  };

  useEffect(() => {
    console.log(state);
  });

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        searchResults: state.searchResults,
        getBooks
      }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
