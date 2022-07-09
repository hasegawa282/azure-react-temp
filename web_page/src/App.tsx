import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Homes from 'pages/Homes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/sample" element={<div >sample</div>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
