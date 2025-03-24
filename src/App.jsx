import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Tes from './Pages/Tes';
import Frontend from './Pages/FrontendCodeCollection/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/code-collection" element={<Frontend />} />
      </Routes>
    </Router>
  );
}

export default App;
