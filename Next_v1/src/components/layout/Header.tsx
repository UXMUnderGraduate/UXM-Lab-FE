'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import Menu from '../../assets/menu.png';
import Burger from './Bugger';
import Image from 'next/image';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const toggleChange = () => setToggle(!toggle);

  return (
    <header className="header">
      <div className="header-container">
        <div>
          <Link href="/" legacyBehavior>
            <a className="font-bold text-2xl sm:text-3xl">UXM Lab</a>
          </Link>
        </div>
        <div className="block md:hidden top-0 right-0" onClick={toggleChange}>
          {toggle ? null : <Image src={Menu} width="24" height="24" alt="menu" className="w-6 h-6" />}
        </div>
        <Nav />
      </div>
      {toggle ? <Burger toggle={toggle} setToggle={setToggle} /> : null}
    </header>
  );
};

export default Header;
