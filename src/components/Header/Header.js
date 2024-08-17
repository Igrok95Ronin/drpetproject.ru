import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/img/logoMain.png'

import './Header.scss';

const Header = () => {
  // Создаем состояние для управления открытием/закрытием меню
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className="header">
      <div className="header__box">
        <div className="header__logo">
          {/* <span>D</span>
          <span>R</span>
          <div className="header__inner">
            <span>PET</span>
            <span>PROJECTs</span>
          </div> */}
          <img src={LogoImg} alt="" class="header__img" />
        </div>
        <nav className="navbar">
          <div className="burger" id="burger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul
            className={`header__ul menu ${isMenuActive ? 'active' : ''}`}
            id="menu"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                href="https://github.com/Igrok95Ronin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Igrok95Ronin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codewars
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Сertificates
              </a>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
