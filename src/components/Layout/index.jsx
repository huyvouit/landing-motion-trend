import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { PopUpContext } from '../../context/popup_provider';

import Footer from '../Footer';
import Header from '../Header';
import Modal from '../Modal';
import './styles.scss';
const Layout = () => {
  const { showPopUp, closePopUp } = useContext(PopUpContext);

  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPopUp]);

  return (
    <div>
      {showPopUp ? <div onClick={closePopUp} className="back-drop"></div> : null}
      <main className="layout">
        {showPopUp && <Modal />}
        <Header />
        <div className="layout-main">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
