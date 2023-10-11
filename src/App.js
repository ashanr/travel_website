import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ContactPage from './components/ContactPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} ></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
