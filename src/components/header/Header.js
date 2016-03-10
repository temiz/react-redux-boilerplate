import React from 'react';
import { Link } from 'react-router';
import './assets/styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container row">
        <div className="header__logo large-1 columns">ghost</div>

        <ul className="menu large-8 columns">
          <li className="menu__item">
            <Link to="activity">Activity</Link>
          </li>
          <li className="menu__item">
            <Link to="weight">Weight</Link>
          </li>
          <li className="menu__item">
            <Link to="sleep">Sleep</Link>
          </li>
          <li className="menu__item">
            <img className="img-inline-fix" src="/src/components/header/assets/images/magnifier.svg"/>
          </li>
        </ul>

        <ul className="menu large-2 columns end">
          <li className="menu__item">Login</li>
          <li className="menu__item--highlight">Sign up</li>
        </ul>

      </div>
    </header>
  );
};

export default Header;
