"use client"; // this is a client component
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.scss";

interface CarouselProps {
    images: string[];
    slideInterval?: number;
  }

const CarouselRD: React.FC<CarouselProps> = ({ images, slideInterval = 3000 }) => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    arrows: true,
    adaptiveHeight: true
    };

    return (
    <div className="carousel-container">
        <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index} className="image-container">
            <img src={image} alt={`Carousel image ${index + 1}`} />
            </div>
        ))}
        </Slider>
        <style jsx>{`
        
        `}</style>
    </div>
    );
};

export default CarouselRD;
