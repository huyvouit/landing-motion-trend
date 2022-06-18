import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import './styles.scss';
const Layout = () => {
  return (
    <main className="layout">
      <Header />
      <div className="layout-main">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
