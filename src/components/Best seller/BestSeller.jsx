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
        <SwiperSlide className="swipe" ><img className=""  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1607103555-51wmv-2LokL.jpg?crop=1xw:0.993xh;center,top&resize=480:*" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUmNCPrkvcUqV_TNJ3OUfgcW8_0IBgkWkXU2BH_C1_7cWIci3Q8vJfT5sP7l0Fo2Vq74&usqp=CAU" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="" src='https://images1.penguinrandomhouse.com/cover/9780735211247' /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflVQHazUTLkqbp7TQNd2ACNaif-fdgxjwrw&usqp=CAU" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="" src="https://images-na.ssl-images-amazon.com/images/I/51E96WWXW1L._AC_SX368_.jpg" /></SwiperSlide>
        <SwiperSlide className="swipe"><img className="" src="https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476753188/ugly-love-9781476753188_lg.jpg" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}


