import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='col-12 bg-success nav'>
      <ul className='nav navbar'>
        <li className='nav-item '>
          <Link to='/' className='nav-link ' style={{ color: '#fff' }}>
            Home
          </Link>
        </li>

        <li className='nav-item '>
          <Link to='/search' className='nav-link' style={{ color: '#fff' }}>
            Search
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
