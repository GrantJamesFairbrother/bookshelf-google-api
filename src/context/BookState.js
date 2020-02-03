import React, { useReducer, useEffect } from 'react';
import BookReducer from './BookReducer';
import BookContext from './bookContext';
import { GET_BOOKS } from './types';

const BookState = props => {
  const initialState = {
    books: {}
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  // Actions

  useEffect(() => {
    console.log(state);
  });

  return (
    <BookContext.Provider value={{ state }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
