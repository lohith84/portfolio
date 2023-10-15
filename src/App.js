import './App.css';
/* import { useEffect, useState } from 'react'
 */import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js'
import About from './Pages/About'
import Skills from './Pages/Skill'
import Project from './Pages/Project';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
