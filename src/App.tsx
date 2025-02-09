import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Header from './assets/components/Header'
import Aboutus from './routes/Aboutus';
import Ourwork from './routes/Ourwork';
import Blog from 'routes/Blog';
import Careers from 'routes/Careers';
import ContactUs from 'routes/ContactUs';
import Startups from 'routes/Startups';
import Faq from 'routes/Faq';
import JobPost from 'routes/JobPost';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourwork" element={<Ourwork />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/jobpost" element={<JobPost />} />
        </Routes>
    </Router>
  );
};

export default App;
