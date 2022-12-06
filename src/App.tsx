import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Feed from './pages/Feed'
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/feed' element={<Feed />} />
      </Routes>
      <NavBar/>
    </Router>
  );
}

export default App;
