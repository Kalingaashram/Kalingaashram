import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import MudTherapy from './pages/MudTherapy';
import NaturalFarming from './pages/NaturalFarming';
import Education from './pages/Education';
import Videos from './pages/Videos';
import Header from './components/Header';
import Donate from './pages/Donate';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App" style={{ minHeight: '80vh' }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/event" element={<Events />} />
          <Route path="/mudtherapy" element={<MudTherapy />} />
          <Route path="/natural-farming" element={<NaturalFarming />} />
          <Route path="/education" element={<Education />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
