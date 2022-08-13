// import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import Social from './Social';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const displayMenu = () => {
    if (window.innerWidth < 769) {
      document.body.classList.toggle('hidden');
      setShowMenu(!showMenu);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 769 && showMenu === true) {
      setShowMenu(!showMenu);
      document.body.classList.toggle('hidden');
    }
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    color: 'white',
  };

  return (
    <nav className="nav-style">
      <div id="logo" style={logoStyle}>
        <span id="logo-img" />
        <h1 id="logo-text">
          Logo
        </h1>
      </div>
      <div className="menu-mobile">
        <button className="hamburguer" type="button" label="menu" onClick={displayMenu}>{showMenu ? (<AiFillCloseCircle />) : (<AiOutlineMenu />)}</button>
      </div>
      <ul className={showMenu ? 'menu-link mobile' : 'menu-link'}>
        <li
          className="menu-item"
          key={1}
        >
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : 'white',
            })}
            to="/"
          >
            Featured
          </NavLink>
        </li>

        <li
          className="menu-item"
          key={2}
        >
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : 'white',
            })}
            to="/hotel-details"
          >
            List of hotels
          </NavLink>
        </li>
        <li
          className="menu-item"
          key={3}
        >
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : 'white',
            })}
            to=""
          >
            Reservations
          </NavLink>
        </li>
        <li
          className="menu-item"
          key={4}
        >
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : 'white',
            })}
            to=""
          >
            Log in
          </NavLink>
        </li>
        <li
          className="menu-item"
          key={5}
        >
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : 'white',
            })}
            to=""
          >
            Sign up
          </NavLink>
        </li>
        <li
          className="menu-item"
          key={6}
        >
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'red' : 'white',
            })}
            to=""
          >
            Log out
          </NavLink>
        </li>
      </ul>
      <div className="social-menu">
        <Social />
      </div>
    </nav>
  );
};

export default Navbar;
