// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer component
import Home from './pages/Home';
import About from './pages/About'; // Ensure correct import
import Services from './pages/Services'; // Ensure correct import
import Contact from './pages/Contact'; // Ensure correct import
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme'; // Assuming you have a theme setup

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS */}
      <Header /> {/* Include Header */}
      <div style={{ paddingTop: '64px' }}> {/* Add padding to avoid overlap with fixed Header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer /> {/* Include Footer */}
    </ThemeProvider>
  );
};

export default App;
