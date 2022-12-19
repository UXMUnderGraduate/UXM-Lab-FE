import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Bugger({ toggle, setToggle }) {
  const outside = useRef();
  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);

    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });

  const handlerOutsie = (e) => {
    if (!outside.current.contains(e.target)) {
      //현재 클릭한 곳이 메뉴 컴포넌트 안이 아니면 닫기
      toggleSide();
    }
  };

  const toggleSide = () => {
    setToggle(false);
  };

  return (
    <div className="inline" ref={outside}>
      <div className="list-item">
        <NavLink className="list-item-text" to="/">
          Home
        </NavLink>
      </div>
      <div className="list-item">
        <NavLink className="list-item-text" to="/members">
          Members
        </NavLink>
      </div>
      <div className="list-item">
        <NavLink className="list-item-text" to="/research">
          Research
        </NavLink>
      </div>
      <div className="list-item">
        <NavLink className="list-item-text" to="/publications">
          Publications
        </NavLink>
      </div>
      <div className="list-item">
        <NavLink className="list-item-text" to="/notices">
          Notices
        </NavLink>
      </div>
      <div className="list-item">
        <NavLink className="list-item-text" to="/gallery">
          Gallery
        </NavLink>
      </div>
    </div>
  );
}
