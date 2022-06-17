import React from 'react';
import Icons from '../../assets/icons';
// import style from './styles.scss';
import Images from '../../assets/images';
import './styles.scss';
const Header = () => {
  const [keyword, setKeyword] = React.useState('');
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
      <div className="header-mid">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for motion trend......"
        />
      </div>
      <div className="header-right">
        <img src={Icons.IconSearch} alt="icon search" className="header-icon-search" />
        <div className="header-auth">
          <p className="header-menu-text">Login</p>
          <p className="header-menu-text">Sign up</p>
        </div>
      </div>
      <div className="header-icon-menu">
        <img
          className="image-icon"
          src={Icons.IconMenu}
          width="20px"
          height="20px"
          alt="icon menu"
          //   onClick={ClickedToggle}
        />
      </div>
    </main>
  );
};

export default Header;
