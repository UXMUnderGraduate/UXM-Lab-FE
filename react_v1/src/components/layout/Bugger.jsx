import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', routePath: '/' },
  { name: 'Members', routePath: '/members' },
  { name: 'Research', routePath: '/research' },
  { name: 'Publication', routePath: '/publications' },
  { name: 'Notices', routePath: '/notices' },
  { name: 'Gallery', routePath: '/gallery' },
];

const activeStyle = 'text-myBlue py-1 border-b-2 border-myBlue';
const defaultStyle = 'py-2 hover:opacity-50 ';

export default function Burger({ toggle, setToggle }) {
  const outside = useRef();
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    document.addEventListener('mousedown', handlerOutside);

    return () => {
      document.removeEventListener('mousedown', handlerOutside);
    };
  });

  const handlerOutside = (e) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setToggle(false);
  };

  const handleNavLinkClick = () => {
    setToggle(false);
  };

  // 현재 라우터의 위치를 확인하고 현재 라우터의 위치를 제외 하고 네비게이션에 출력한다.
  const routeList = (obj) => {
    return ![
      /*현재 라우팅 주소*/
    ].includes(obj.routeList);
  };

  //  const MSList = dummy.filter((obj) => {
  //    return obj.isAlumni !== true && !['Professor', 'BS Student', 'Ph.D. Student', 'Ph.D. Candidate'].includes(obj.degree);
  //  });

  return (
    <div
      className={`flex justify-center flex-col align-center bg-white h-screen -m-8 w-1/3 mt-1 shadow-2xl transition-transform duration-500 ${
        toggle ? 'animate-slide-right' : 'animate-slide-'
      }`}
      ref={outside}>
      <NavLink className="list-item" to="/" onClick={handleNavLinkClick}>
        Home
      </NavLink>

      <NavLink className="list-item" to="/members" onClick={handleNavLinkClick}>
        Members
      </NavLink>

      <NavLink className="list-item" to="/research" onClick={handleNavLinkClick}>
        Research
      </NavLink>

      <NavLink className="list-item" to="/publications" onClick={handleNavLinkClick}>
        Publications
      </NavLink>

      <NavLink className="list-item" to="/notices" onClick={handleNavLinkClick}>
        Notices
      </NavLink>

      <NavLink className="list-item" to="/gallery" onClick={handleNavLinkClick}>
        Gallery
      </NavLink>
    </div>
  );
}
