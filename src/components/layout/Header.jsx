import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Menu from '../../assets/menu.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div>
          <Link to='/' className='font-bold text-2xl sm:text-3xl'>
            uxm lab.
          </Link>
        </div>
        <div className='block md:hidden'>
          <img src={Menu} alt='menu' className='w-6 h-6' />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
