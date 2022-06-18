import React from 'react';
import Icons from '../../assets/icons';
import './styles.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <p className="title">Contact</p>
        <p className="email">motiontrend@test.com</p>
      </div>
      <div className="contact-right">
        <p className="copy-right">@ Motiontrend. All rights reserved.</p>
        <div className="icon-social">
          <img src={Icons.IconIns} alt="instagram" />
          <img src={Icons.IconFb} alt="facebook" />
          <img src={Icons.IconYtb} alt="youtube" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
