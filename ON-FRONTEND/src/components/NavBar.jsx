import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as s from './NavBarStyled.jsx';
import on_logo from '../assets/images/on_logo.svg';
import profile from '../assets/images/profile.svg';
import search_button from '../assets/images/search_button.svg';
import notification from '../assets/images/notification.svg';

const NavBar = () => {
  return (
    <s.NavbarLayout>
      <s.Logo src={on_logo} />
      <s.ComponentConatiner>
        <NavLink to="/search">
          <s.Item src={search_button} />
        </NavLink>
        <NavLink to="/notification">
          <s.Item src={notification} />
        </NavLink>
        <NavLink to="/mypage">
          <s.Item src={profile} />
        </NavLink>
      </s.ComponentConatiner>
    </s.NavbarLayout>
  );
};

export default NavBar;
