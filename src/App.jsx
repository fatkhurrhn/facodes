import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Tes from './Pages/Tes';
import Frontend from './Pages/FrontendCodeCollection/HomePage';

import Navbar01 from './Pages/Navbar/Navbar01';

import Button01 from './Pages/Button/Button01';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/code-collection" element={<Frontend />} />

        <Route path="/navbar-01" element={<Navbar01 />} />

        <Route path="/button-01" element={<Button01 />} />
      </Routes>
    </Router>
  );
}

export default App;
