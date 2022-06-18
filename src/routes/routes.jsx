import React, { Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Layout from '../components/Layout';
import PopUpContextProvider from '../context/popup_provider';
import LandingPage from '../pages/LandingPage';

export default function AppRoutes() {
  return (
    <PopUpContextProvider>
      <Suspense fallback={null}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </PopUpContextProvider>
  );
}
