import React from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import './Features.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FeatureItems = ( { data }) => {
    useEffect(() => {
        Aos.init();
      }, []);
    const {bookName, bookAutor, bookPrice, bookImg, id, bookDiscount} = data;
    return (
        <div className="featuredItem">
    <div className="features" data-aos='fade-left' aso-data-duration='2000'>
        <div className="featureImgContainer">
        <img src={bookImg} />
        </div>
   <div>
    <div className="stars">
    <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <BsStarHalf />
    </div>
    <div className="descrip">
    <h3 className="bookName">{bookName}</h3>
    <p className="bookAutor">{bookAutor}</p>
    </div>
    <div className="prices">
        <span className="cPrice">${bookPrice}</span>
        <span className="dPrice">${bookDiscount}</span>
    </div>
    <div className="favAddBtn">
       < AiOutlineHeart type="button" className="favBtn" />
    <button className="AddToCartBtn">Add to Cart</button>
    </div>
   </div>
    </div>
    </div>
    )
};

export default FeatureItems;