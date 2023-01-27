import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import BestSeller from './components/Best seller/BestSeller';
import TrendingBooks from './components/Trending/TrendingBooks';
import SignUpPage from './components/Register/signUpPage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SignIn from './components/Register/signInPage';
function App() {
 return(
   <BrowserRouter>
   <React.Fragment>
   <Navbar />
   <Routes>
   <Route path='/' element={ <Header />}/>
   <Route path='/features' element={ <Features />}/>
   <Route path='/trending' element={ <TrendingBooks />}/>
   <Route path='/bestSeller' element={ <BestSeller />}/>
   <Route path='/signUp' element={ <SignUpPage />}/>
   <Route path='/signIn' element={ <SignIn />}/>
   </Routes>
<Footer />
   </React.Fragment>
   </BrowserRouter>
   
 )
}

export default App;
