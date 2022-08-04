import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Images from './Components/Images/Images';
import Footer from './Components/Footer/Footer';
import Navigator from './Components/Navigator/Navigator';
import About from './Components/About/About'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
       <Routes>
          <Route path='/' element={<Images />} />
          <Route path='/ABOUT' element={<About />} />
       </Routes>
      <Footer />
      </div> 
  )
  }
export default App;