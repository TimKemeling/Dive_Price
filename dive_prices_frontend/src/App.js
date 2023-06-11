import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Beginners from './pages/Beginners';
import Schools from './pages/Schools';
import Booking from './pages/Booking';
import Search from './pages/search';
import Faq from './pages/FaQ';
import ApiView from './pages/tryAPI';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from './pages/Course';
import Advanced from './pages/Advanced';
import Fundiving from './pages/Fundiving';
import PageNotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/beginners" element={<Beginners />}/>
          <Route path="/advanced" element={<Advanced />}/>
          <Route path="/fundiving" element={<Fundiving />}/>
          <Route path="/schools/:id" element={<Schools />}/>
          <Route path="/Booking" element={<Booking />}/>
          <Route path="/course/:course" element ={<Course />}/>
          <Route path="/Search" element={<Search />}/>
          <Route path="/FAQ" element={<Faq />}/>
          <Route path="/API" element={<ApiView />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        {Location.pathname !== '/home' && <Footer /> }
      </Router>
    </div>
  );
}

export default App;
