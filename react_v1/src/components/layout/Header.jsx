import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Menu from '../../assets/menu.png';
import Bugger from './Bugger';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleChange = () => setToggle(!toggle);

  return (
    <header className="header">
      <div className="header-container">
        <div>
          <Link to="/" className="font-bold text-2xl sm:text-3xl">
            uxm lab.
          </Link>
        </div>
        <div className="block md:hidden top-0 right-0 " onClick={toggleChange}>
          {toggle ? <></> : <img src={Menu} alt="menu" className="w-6 h-6" />}
        </div>
        <Nav />
      </div>
      {toggle ? <Bugger toggle={toggle} setToggle={setToggle} /> : <></>}
    </header>
  );
};

export default Header;
