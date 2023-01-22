import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./BestSeller.css";

// import required modules
import { Pagination } from "swiper";

export default function BestSeller() {
  return (
    <>
    <div className="bestH"><h1>Best Seller</h1></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swipe" > <a href="#"><img className="swipImg"  src=" https://images4.penguinrandomhouse.com/cover/9780385474542" /></a></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src="https://images1.penguinrandomhouse.com/cover/9781984821867" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src='https://images1.penguinrandomhouse.com/cover/9780735211247' /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflVQHazUTLkqbp7TQNd2ACNaif-fdgxjwrw&usqp=CAU" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src="https://images3.penguinrandomhouse.com/cover/9780593337820" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src="https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476753188/ugly-love-9781476753188_lg.jpg" /></SwiperSlide>
        <SwiperSlide className="swipe" ><img className="swipImg"  src="https://images4.penguinrandomhouse.com/cover/9780593498958" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src="https://images4.penguinrandomhouse.com/cover/9780593539941" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src='https://images4.penguinrandomhouse.com/cover/9780593201268' /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src="https://images1.penguinrandomhouse.com/cover/9780593156599" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src="https://images3.penguinrandomhouse.com/cover/9780399592706" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="swipImg" src="https://images3.penguinrandomhouse.com/cover/9780812976717" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}


