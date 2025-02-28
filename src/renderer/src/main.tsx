import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Login from './Login';
import Home from './Home';
import { ThemeProviderComponent } from "./components/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProviderComponent>
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProviderComponent>
  </React.StrictMode>
);
