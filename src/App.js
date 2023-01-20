import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Features from './components/Features/Features';


function App() {
 return(
   <React.Fragment>
       <Navbar />
        <Header />
        <Features />
   </React.Fragment>
   
 )
}

export default App;
