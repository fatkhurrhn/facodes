// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Tes from './Pages/Tes';

import Per from './Pages/StyleDocs';

import Button01 from './Pages/DetailComponents/Button01';

// import Page Project
import Project01 from './Pages/DetailProjects/repo-sync';
import Project02 from './Pages/DetailProjects/hex-code-color-generator';
import Project03 from './Pages/DetailProjects/todo-list-es6';
import Project04 from './Pages/DetailProjects/web-playground';
import Project05 from './Pages/DetailProjects/simple-crud-nodejs';
import Project06 from './Pages/DetailProjects/floral-surprise';
import Project07 from './Pages/DetailProjects/portfolio-nextjs';
import Project08 from './Pages/DetailProjects/dream-lms';
import Project09 from './Pages/DetailProjects/quote-generator';
import Project10 from './Pages/DetailProjects/shop-thur';
import Project11 from './Pages/DetailProjects/kalkulator-istighfar';
import Project12 from './Pages/DetailProjects/multi-image-upload';
import Project13 from './Pages/DetailProjects/id-card-generator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/tess" element={<Per />} />

        <Route path="/button-01" element={<Button01 />} />

        {/* route Page Project */}
        <Route path="/repo-sync" element={<Project01 />} />
        <Route path="/hex-code-color-generator" element={<Project02 />} />
        <Route path="/todo-list-es6" element={<Project03 />} />
        <Route path="/web-playground" element={<Project04 />} />
        <Route path="/simple-crud-nodejs" element={<Project05 />} />
        <Route path="/floral-surprise" element={<Project06 />} />
        <Route path="/portfolio-nextjs" element={<Project07 />} />
        <Route path="/dream-lms" element={<Project08 />} />
        <Route path="/quote-generator" element={<Project09 />} />
        <Route path="/shop-thur" element={<Project10 />} />
        <Route path="/kalkulator-istighfar" element={<Project11 />} />
        <Route path="/multi-image-upload" element={<Project12 />} />
        <Route path="/id-card-generator" element={<Project13 />} />
      </Routes>
    </Router>
  );
}

export default App;
