import React from 'react';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import './styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <p className="internal">Introduction</p>
        <LineDivider />
        <p className="internal">Terms of Service</p>
        <LineDivider />
        <p className="internal" style={{ textAlign: 'center' }}>
          Language
          <span>
            <img src={Icons.IconDown} alt="" />
          </span>
        </p>
        <LineDivider />
        <p className="internal">Customer Service</p>
      </div>
      <div className="footer-right">
        <img src={Images.LogoBlack} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;

const LineDivider = () => {
  return <div className="line"></div>;
};
