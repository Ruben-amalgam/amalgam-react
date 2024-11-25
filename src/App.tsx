import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Header from './assets/components/Header'
import Aboutus from './routes/Aboutus';
import Ourwork from './routes/Ourwork';


const App: React.FC = () => {
  return (
    <Router basename="/amalgam-react">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/ourwork" element={<Ourwork />} /> 
        <Route path="/aboutus" element={<Aboutus />} /> 
      </Routes>
    </Router>
  );
};

export default App;
