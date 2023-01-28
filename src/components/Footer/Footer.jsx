import React from "react";
import { ReactDOM } from "react";
import './Footer.css'
import  { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { GiChargedArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';




export const Footer = () => {
    return(
       <footer className="footer">
       
          <div className="Raddress">
            <h1 >Readers Lodge</h1>
            <p className="pL"><HiLocationMarker className="Licon" /> No 8 Awka South Anambra State </p>
            <p className="pL"><BsFillTelephoneForwardFill className="Licon" /><a href="tel:+2347084183611"> <strong>+234 708 4183 611</strong></a> </p>
         <p className="pL"><AiOutlineMail className="Licon" />  <a href="mailto:nzubestdesmond@gmail.com">info@Readerslodge.com</a></p>
            <div className="social">
              <h3>Follow us on</h3>
              <div className="socIcon">
              <a href="http:///www.twitter.com/nzubechukwu101"><AiFillTwitterCircle className="soc"/></a>
              <a href="https://www.github.com/DesmondNzubechi"><AiFillGithub className="soc"/></a>
              <a href="https://www.linkedin.com/in/desmond.nzubechukwu-38895422"><AiFillLinkedin className="soc" /></a>
             <a href="http://https://wa.link/jkkm3m"><AiOutlineWhatsApp className="soc" /></a>
              </div>
            </div>
            </div>  
            <div>
            <div >
              <div className="linkSec">
              <h1>Important Links</h1>
              <div className="linkT">
              <Link className="li"><GiChargedArrow className="linkarrow"/>   Home</Link>
                <Link className="li"><GiChargedArrow className="linkarrow"/> About</Link>
                <Link className="li"><GiChargedArrow className="linkarrow"/> Contact Us</Link>
                <Link className="li"><GiChargedArrow className="linkarrow"/>  Reviews</Link>
              </div>
            </div>
            <div className="custom">
              <h1>Customer Service</h1>
           <Link className="customLink" to='/help'>Help & Faq</Link>
           <Link  className="customLink"to='/delivery'>Delivery Information</Link>
           <Link className="customLink" to='/payment'> Payment Information</Link>
           <Link className="customLink" to='/terms'>Terms and Condition</Link>
            </div>
            <div className="myAc">
              <h1>My Account</h1>
              <Link className="myAcLink" to='/signIn'>LogIn</Link>
           <Link className="myAcLink" to='/signUp'> Register</Link>
           <Link className="myAcLink" to='/cart'>Order History</Link>
            </div>
              </div>
             <div>
              <form action="">
                <div className="Newsletter"><label htmlFor="email">NewsLetter: </label><input type="email" name="Newslater" id="email" placeholder="Email Address" /><input type="button" value="Subscribe" /></div>
              </form>
             </div>
        </div>
             
       </footer>
    )
};

export default Footer;