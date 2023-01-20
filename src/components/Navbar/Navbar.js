import React from "react";
import { ReactDOM } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBookFill } from 'react-icons/bs';
import { AiOutlineAlignRight } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import  './navbar.css';



const Navbar = () => {
    const [close, setClose] = useState(false);
    const [open, setOpen] = useState(true);
    const openClicked = () => {
        setClose(true);
        setOpen(false)
    }
    const closeClicked = () => {
        setClose(false);
        setOpen(true)
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
            <a href="index.html">Readers lodge</a>
            <BsFillBookFill className="booky" />
        </div>
        <div className="links">
            <ul>
                <li>< a href="#">Home</a></li>
                <li>< a href="#">Featues</a></li>
                <li>< a href="#">Best Seller</a></li>
                <li>< a href="#">Others</a></li>
            </ul>
            <div className="sign">
           
                <button className="reg">Register</button>
                <button className="logIn">Log In</button>
           
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