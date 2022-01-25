import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiShoppingCart } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavBarItem, navItems } from './navData';

const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<any>(false);
  const navRef = useRef<HTMLButtonElement>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // <nav ref={navRef as React.RefObject<HTMLDivElement>} className={`top-0`}></nav>
  return (
    <nav className="w-full bg-orange-200	 backdrop-blur-sm	bg-white/20 dark:bg-black/40 dark:text-white flex md:justify-center justify-between items-center p-1 sticky top-0 z-50">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <img src="" alt="logo" />
        </Link>
      </div>
      <ul className="text-black font-semibold dark:text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navItems.map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="ml-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
          {/* <SwitchToDarkMood /> */}
          lol
        </li>
        <li className=" py-2 px-7 mx-4 rounded-full cursor-pointer relative">
          <Link to="/cart">
            <HiShoppingCart fontSize={28} />
            <div className="absolute h-14 w-14 -top-4 rounded-full p-2 font-bold flex justify-center items-center">
              2
            </div>
          </Link>
        </li>
      </ul>
      <div className="site-header__actions">
        <button
          ref={navRef as React.RefObject<HTMLButtonElement>}
          className={`search-form-wrapper ${
            searchOpen ? 'search-form--active' : ''
          }`}
        >
          <form className={`search-form`}>
            <i
              className="icon-cancel"
              onClick={() => setSearchOpen(!searchOpen)}
            ></i>
            <input
              type="text"
              name="search"
              placeholder="Enter the product you are looking for"
            />
          </form>
          <i
            onClick={() => setSearchOpen(!searchOpen)}
            className="icon-search"
          ></i>
        </button>
        <Link to="/cart">
          <button className="btn-cart">
            <i className="icon-cart"></i>
            {/* {cartItems.length > 0 && 
                <span className="btn-cart__count">{cartItems.length}</span>
              } */}
          </button>
        </Link>
        <Link to="/login">
          <button className="site-header__btn-avatar">
            <i className="icon-avatar"></i>
          </button>
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className="site-header__btn-menu"
        >
          <i className="btn-hamburger">
            <span></span>
          </i>
        </button>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-black dark:text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-black dark:text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in dark:text-black"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navItems.map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
