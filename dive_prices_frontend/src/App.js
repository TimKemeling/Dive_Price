import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Schools from './pages/Schools';
import Booking from './pages/Booking';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from './pages/Course';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/schools" element={<Schools />}/>
          <Route path="/Booking" element={<Booking />}/>
          <Route path="/course/:id" element ={<Course />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
