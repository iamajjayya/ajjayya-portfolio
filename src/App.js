import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect } from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import  About from './components/aboutme/About';
import  Education from './components/Education/Education';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 400, 
      easing: 'ease', 
      once: false,
  });
  });
  return (
    <>
   <Router>
    <Routes>

   
      <Route path="/" element={<About />} />
      
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />


      
    </Routes>
    </Router>  
    </>
  );
}

export default App;


