import React from 'react';
import Header from './Component/Header/Header';

import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactsPage from './Pages/ContactsPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
