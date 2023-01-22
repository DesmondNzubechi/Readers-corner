import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import BestSeller from './components/Best seller/BestSeller';
function App() {
 return(
   <React.Fragment>
       <Navbar />
        <Header />
        <BestSeller />
        <Features />
   </React.Fragment>
   
 )
}

export default App;
