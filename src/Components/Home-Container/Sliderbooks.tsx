import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliderbooks.css"
interface cardProps {
  title: string;
  bookImg: string;
}


export default function Sliderbooks({title,bookImg}:cardProps) {
  console.log("reach here");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='wrapper'>
      <h2 className='h2'> Multiple items </h2>
      <Slider {...settings}>
        <div className='cards'>
          <img src={bookImg}></img>
          <h6>{title}</h6>
        </div>
        
     </Slider>
   </div>
  );
}

