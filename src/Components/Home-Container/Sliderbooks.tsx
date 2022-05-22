import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliderbooks.css"


export default function Sliderbooks() {
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
          <h3>1</h3>
        </div>
        <div className='cards'>
          <h3>2</h3>
        </div>
        <div className='cards'>
          <h3>3</h3>
        </div>
        <div className='cards'>
          <h3>4</h3>
        </div>
        <div className='cards'>
          <h3>5</h3>
        </div>
        <div className='cards'>
          <h3>6</h3>
        </div>
        <div className='cards'>
          <h3>7</h3>
        </div>
        <div className='cards'>
          <h3>8</h3>
        </div>
        <div className='cards'>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

