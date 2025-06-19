import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Pages
import Box1Page from './pages/Box1Page.jsx';
import Box2Page from './pages/Box2Page.jsx';
import Box3Page from './pages/Box3Page.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/box1" element={<Box1Page />} />
        <Route path="/box2" element={<Box2Page />} />
        <Route path="/box3" element={<Box3Page />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
