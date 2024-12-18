import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { FindTutor } from './pages/FindTutor';
import { BecomeTutor } from './pages/BecomeTutor';
import { GetStarted } from './pages/GetStarted';
import { AboutUs } from './pages/AboutUs';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-violet-50 via-blue-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-tutor" element={<FindTutor />} />
          <Route path="/become-tutor" element={<BecomeTutor />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}