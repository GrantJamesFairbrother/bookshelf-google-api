import React from 'react';

const Book = ({ book }) => {
  return (
    <div
      className='col-md-2  d-inline-block col-5 p-0 m-1 '
      style={{ minHeight: 222 }}>
      {book.imageURL || book.volumeInfo.imageLinks ? (
        <div className='d-flex justify-content-center mb-2'>
          <img
            src={
              book.imageURL
                ? book.imageURL
                : book.volumeInfo.imageLinks.thumbnail
            }
            width={130}
            height={150}
            alt='Book'
            style={{
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}
          />
        </div>
      ) : (
        <h4 className='m-0 text-center bg-light' style={{ minHeight: 150 }}>
          No Image
        </h4>
      )}
      <div className='text-center'>
        {book.title ? book.title : book.volumeInfo.title}
      </div>
    </div>
  );
};

export default Book;
