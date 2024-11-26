import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Header from './assets/components/Header'
import Aboutus from './routes/Aboutus';
import Ourwork from './routes/Ourwork';
import Blog from 'routes/Blog';
import Careers from 'routes/Careers';
import ContactUs from 'routes/ContactUs';


const App: React.FC = () => {
  return (
    <Router basename="/amalgam-react">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/ourwork" element={<Ourwork />} /> 
        <Route path="/aboutus" element={<Aboutus />} /> 
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/careers" element={<Careers/>} /> 
        <Route path="/contactus" element={<ContactUs/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
