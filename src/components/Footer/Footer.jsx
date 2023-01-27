import React from "react";
import { ReactDOM } from "react";
import './Footer.css'
import  { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { GiChargedArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
export const Footer = () => {
    return(
       <div>
        <div>
          <div>
            <h1>Readers Lodge</h1>
            <p><HiLocationMarker /> No 8 Awka South Anambra State </p>
            <p><BsFillTelephoneForwardFill /> <strong>+234 708 4183 611</strong> </p>
            </div>  
            <div>
              <h1>Important Links</h1>
              <div>
              <Link><GiChargedArrow />Home</Link>
                <Link><GiChargedArrow /> About</Link>
                <Link><GiChargedArrow /> Contact Us</Link>
                <Link><GiChargedArrow /> Reviews</Link>
                <Link><GiChargedArrow /> Payment Method</Link>
                
              </div>
            </div>
            <div>
              <h1>Get in Touch With Us</h1>
            <p><HiLocationMarker /> No 8 Awka South Anambra State </p>
            <p><BsFillTelephoneForwardFill /><a href="tel:+2347084183611"> <strong>+234 708 4183 611</strong></a> </p>
            <div>
              <a href="http:///www.twitter.com/nzubechukwu101"></a>
              <a href="https://www.github.com/DesmondNzubechi"></a>
              <a href="https://www.linkedin.com/in/desmond.nzubechukwu-38895422"></a>
            </div>
            </div>
        </div>
       </div>
    )
};

export default Footer;