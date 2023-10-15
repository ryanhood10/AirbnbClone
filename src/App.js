import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';

import './index.css';


function App() {
  
  return (
    <Router>
      <div className="">
        <Header />
        <Banner />
        
        {/* <Routes> */}
          {/* <Route
            path="/"
            element={<React.Fragment>
              <Hero /> */}
        
          {/* </Routes> */}

      </div>
    </Router>
  );
}

export default App;
