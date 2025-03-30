// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Tes from './Pages/Tes';

import Button01 from './Pages/DetailComponents/Button01';

import Project01 from './Pages/DetailProjects/repo-sync';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tes" element={<Tes />} />

        <Route path="/button-01" element={<Button01 />} />

        <Route path="/repo-sync" element={<Project01 />} />
      </Routes>
    </Router>
  );
}

export default App;
