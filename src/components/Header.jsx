import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = ({ insideHome }) => {
  return (
    <nav className="flex bg-violet-600 fixed w-full p-5">
      <Link className="text-white font-bold text-2xl" to={'/'}>
        {' '}
        <i className="fa-solid fa-truck-fast me-1"></i> E Cart{' '}
      </Link>
      <ul className="flex-1 text-right">
        {insideHome && (
          <li className="list-none inline-block px-5">
            {' '}
            <input
              className="rounded p-1"
              style={{ width: '300px' }}
              placeholder="Search Products Here"
              type="text"
            />{' '}
          </li>
        )}
        <li className="list-none inline-block px-5">
          {' '}
          <Link to={'/wishlist'} className="text-white font-bold">
            {' '}
            <i className="fa-solid fa-heart text-red-600"></i> Wishlist{' '}
            <span className="rounded bg-black p-1">20</span>{' '}
          </Link>{' '}
        </li>
        <li className="list-none inline-block px-5">
          {' '}
          <Link className="text-white font-bold" to={'/cart'}>
            {' '}
            <i className="fa-solid fa-cart-plus text-green-600"></i> Cart{' '}
            <span className="rounded bg-black p-1">10</span>{' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
