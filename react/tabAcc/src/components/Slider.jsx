import React, { useState, useEffect } from 'react'
import './Slider.css';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: '첫 번째 슬라이드',
      description: '이것은 첫 번째 슬라이드입니다.',
      image: '/images/slide1.jpg'
    },
    {
      id: 1,
      title: '두 번째 슬라이드',
      description: '이것은 두 번째 슬라이드입니다.',
      image: '/images/slide2.jpg'
    },
    {
      id: 2,
      title: '세 번째 슬라이드',
      description: '이것은 세 번째 슬라이드입니다.',
      image: '/images/slide3.jpg'
    },
  ];

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); //% slides.length 반복을위해 0을 나오게하기위함 3/3=0(순환)
    }, 4000);
    
    return() => clearInterval(interval) //
  }, [slides.length]);


  // button 
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (
    <div className="slider-container">
      <h2>슬라이드</h2>
      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="slide"
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button prev" onClick={goToPrevious}>
          ‹
        </button>
        <button className="slider-button next" onClick={goToNext}>
          ›
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (  //({(_, index) 딱히 변수가 필요없고 index만 필요할때 (생략의미)})
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
