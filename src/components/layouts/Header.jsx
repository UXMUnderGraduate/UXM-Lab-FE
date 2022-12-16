import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div>
          <p className='font-bold text-3xl '>uxm lab.</p>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
