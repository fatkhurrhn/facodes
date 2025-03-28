import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Tes from './Pages/Tes';

import Button01 from './Pages/Buttons/Button01';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tes" element={<Tes />} />

        <Route path="/button-01" element={<Button01 />} />
      </Routes>
    </Router>
  );
}

export default App;
