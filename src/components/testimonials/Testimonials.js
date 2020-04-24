import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonials from './data.json'


export default function Testimonials() {

    const settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
    
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false
          }
        }
    
      ]
      
      };

    return (
        <div>
            <Slider {...settings}>
                   {testimonials.map(testimony=>{
                     const{image, title, message}= testimony
                     return(
                      <div className="banner-slide slide-one" key={Math.random()}>
                      <img src={image} className="img-fluid" alt="client-icon"/>
                      <h5>{title} -</h5>
                      <p>{message}</p>
                    </div>

                     )
                   })}
                 
               
            </Slider>
        </div>
  
    )
}
