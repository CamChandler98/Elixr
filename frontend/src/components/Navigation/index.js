import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <header>
    <div className = 'right-side'>
    <ul className = 'nav-links'>
        <NavLink exact to="/">
          <h2> Elixr</h2>
          </NavLink>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
    </header>
  );
}

export default Navigation;
