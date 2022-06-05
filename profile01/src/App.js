// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Service from './Component/Service';
import About from './Component/About';
import Project from './Component/Project';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Project' element={<Project/>} />
          <Route path='/Service' element={<Service/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
