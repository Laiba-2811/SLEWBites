import './App.css';
import {Home} from './Pages/Home';
import {About} from './Pages/About.js';
import Contact from './Pages/Contact';
import Register from './Pages/Signup.js';
import React, { useState } from 'react';
import {ShoppingCart} from './Pages/ProductCatalog';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Navigation from './Pages/NavBar'
function App() {
  
  return (
    <div className="App" >
      <Router>
      <Navigation/>
  <Routes>
  <Route exact path='/' element={< Home />}></Route>
  <Route exact path='//product-catalog' element={< ShoppingCart />}></Route>
  <Route exact path='/about-us' element={< About />}></Route>
  <Route exact path='/contact-us' element={< Contact />}></Route>
  <Route exact path='/signup' element={< Register />}></Route>
  </Routes>
  </Router>
    {/* {Footerrrrrr} */}




    
    </div>
  );
  
}

export default App;
