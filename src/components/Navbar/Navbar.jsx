import React from "react";
import { ReactDOM } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBookFill } from 'react-icons/bs';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import  './navbar.css';
import { Outlet, Link } from "react-router-dom";



const Navbar = () => {
    const [close, setClose] = useState(false);
    const [open, setOpen] = useState(true);
    const [viewLinks, setViewLinks] = useState('-1000px');
    const openClicked = () => {
        setClose(true);
        setOpen(false)
        setViewLinks(0)
    }
    const closeClicked = () => {
        setClose(false);
        setOpen(true)
        setViewLinks('-1000px')
    }
    return (
       
      <nav className='navi'>
        <div className="searchCart">
            <div className="search">
                <AiOutlineSearch className="sIcon" />
                <input type='Text' placeholder='Search for book here' />
            </div>
           
                <button className="cart">Cart <strong>0</strong></button>
           
        </div>
        <div className="navLinks">
        <div className="logo">
            <a href="index.html">Readerslodge</a>
            <BsFillBookFill className="booky" />
        </div>
        <div className="links" style={{left:viewLinks}}>
            <ul>
                <li>< Link  to='/'>Home</Link></li>
                <li>< Link  to='/features' >Features</Link></li>
                <li>< Link to='/bestSeller'>Best Seller</Link></li>
                <li>< Link to='/trending'>Trending</Link></li>
            </ul>
            <div className="sign">
           
            <button className="reg"><Link to='signUp'>Register</Link></button>
                <button className="logIn"> <Link to='/signIn'>LogIn</Link> </button>
           
        </div>
       
        </div>
        <div className="bar">
           {open && < AiOutlineAlignRight className="open" onClick={openClicked} />}
          {close && < AiOutlineClose className="close" onClick={closeClicked}/>}  
        </div>
        </div>
      
      </nav>
    );
}

export default Navbar;