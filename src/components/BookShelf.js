import React, { useContext } from 'react';
import BookContext from '../context/bookContext';
import Book from './Book';

const BookShelf = () => {
  const bookContext = useContext(BookContext);

  const { books } = bookContext;

  const shelves = [
    { shelf: 'currentlyReading', shelfTitle: 'Currently Reading' },
    { shelf: 'wantToRead', shelfTitle: 'Want To Read' },
    { shelf: 'read', shelfTitle: 'Read' }
  ];

  return (
    <>
      {shelves.map(shelf => (
        <div className={'row bg-light'} key={shelf.shelf}>
          <div className='col-12 '>
            <h2 className='pb-1' style={{ borderBottom: '2px solid #000' }}>
              {shelf.shelfTitle}
            </h2>
            <div className='d-flex align-items-start mt-2 flex-wrap'>
              {books.map(
                book =>
                  book.shelf === shelf.shelf && (
                    <Book book={book} key={book.id} />
                  )
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookShelf;
