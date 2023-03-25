'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const activeStyle = 'text-myBlue py-1 border-b-2 border-myBlue';
const defaultStyle = 'py-2 hover:opacity-50';

const Nav: React.FC = () => {
  const currentPathname = usePathname();

  const getLinkClassName = (path: string) => (currentPathname === path ? activeStyle : defaultStyle);

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list_item">
          <Link href="/members" className={getLinkClassName('/members')}>
            Members
          </Link>
        </li>
        <li className="nav-list_item">
          <Link href="/research" className={getLinkClassName('/research')}>
            Research
          </Link>
        </li>
        <li className="nav-list_item">
          <Link href="/publications" className={getLinkClassName('/publications')}>
            Publications
          </Link>
        </li>
        <li className="nav-list_item">
          <Link href="/notices" className={getLinkClassName('/notices')}>
            Notices
          </Link>
        </li>
        <li className="nav-list_item">
          <Link href="/gallery" className={getLinkClassName('/gallery')}>
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
