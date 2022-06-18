import React, { useState, useEffect } from 'react';

import Icons from '../../assets/icons';
import Images from '../../assets/images';

import './styles.scss';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const [showNavBar, setShowNavBar] = useState(false);

  const ClickedToggle = () => {
    setShowNavBar(!showNavBar);
  };

  const resWidth = () => {
    if (window.innerWidth > 950) {
      setShowNavBar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', resWidth);
    return () => window.removeEventListener('resize', resWidth);
  }, [showNavBar]);

  useEffect(() => {
    if (showNavBar) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showNavBar]);

  return (
    <main className="header">
      <div className="header-left">
        <div className="header-logo">
          <img src={Images.LogoMotion} alt="Logo" />
        </div>
        <div className="header-menu">
          <p className="header-menu-text">Discover</p>
          <p className="header-menu-text">Job</p>
        </div>
      </div>

      <div className={'header-mid'}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for motion trend......"
        />
      </div>
      <div className={'header-right '}>
        <img src={Icons.IconSearch} alt="icon search" className="header-icon-search" />
        <div className="header-auth">
          <p className="header-menu-text">Login</p>
          <p className="header-menu-text">Sign up</p>
        </div>
      </div>
      {showNavBar && (
        <div className="header-drop">
          <div className="header-menu show-nav-bar">
            <p className="header-menu-text">Discover</p>
            <p className="header-menu-text">Job</p>
          </div>
          <div className={'header-mid show-nav-bar'}>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search for motion trend......"
            />
            <img src={Icons.IconSearch} alt="icon search" className="header-icon-search" />
          </div>
          <div className={'header-right show-nav-bar'}>
            <div className="header-auth">
              <p className="header-menu-text">Login</p>
              <p className="header-menu-text">Sign up</p>
            </div>
          </div>
        </div>
      )}
      <div className="header-icon-menu">
        <img
          className="image-icon"
          src={Icons.IconMenu}
          width="20px"
          height="20px"
          alt="icon menu"
          onClick={ClickedToggle}
        />
      </div>
    </main>
  );
};

export default Header;
