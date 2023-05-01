import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface BurgerProps {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

const navItems = [
  { name: 'Home', routePath: '/' },
  { name: 'Members', routePath: '/members' },
  { name: 'Research', routePath: '/research' },
  { name: 'Publication', routePath: '/publications' },
  { name: 'Notices', routePath: '/notices' },
  { name: 'Gallery', routePath: '/gallery' },
];

const activeStyle =
  'text-myBlue py-1 text-xl list-none py-5 w-full my-2 block md:hidden text-left bg-white  bg-opacity-75 sm:text-2xl  hover:opacity-100 hover:text-myBlue hover:font-bold px-2';
const defaultStyle =
  'py-2 hover:opacity-50 text-xl list-none py-5 w-full my-2 block md:hidden text-left bg-white  bg-opacity-75 sm:text-2xl  hover:opacity-100 hover:text-myBlue hover:font-bold px-2';

const Burger: React.FC<BurgerProps> = ({ toggle, setToggle }) => {
  const outside = useRef<HTMLDivElement>(null);

  const currentPathname = usePathname();

  const getLinkClassName = (path: string) => {
    return currentPathname === path ? activeStyle : defaultStyle;
  };

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutside);

    return () => {
      document.removeEventListener('mousedown', handlerOutside);
    };
  }, []);

  const handlerOutside = (e: MouseEvent) => {
    if (outside.current && !outside.current.contains(e.target as Node)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setToggle(false);
  };

  const handleNavLinkClick = () => {
    setToggle(false);
  };

  return (
    <div
      className={`flex justify-center flex-col align-center bg-white h-screen -m-8 w-1/3 mt-1 shadow-2xl transition-transform duration-500 ${
        toggle ? 'animate-slide-right' : 'animate-slide-left'
      }`}
      ref={outside}>
      {navItems.map((item) => (
        <Link key={item.routePath} href={item.routePath} legacyBehavior>
          <a onClick={handleNavLinkClick} className={getLinkClassName(item.routePath)}>
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Burger;
