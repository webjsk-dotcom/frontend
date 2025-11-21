import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const FadeSlider = () => {
  const slides = [
    { id: 1, image: '/images/coffee-blue.jpg' },
    { id: 2, image: '/images/coffee-gray.jpg' },
    { id: 3, image: '/images/coffee-pink.jpg' },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      effect="fade"
      navigation
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,       // 3초마다 자동 전환
        disableOnInteraction: false,  // 사용자가 클릭해도 계속 자동재생 유지
      }}
      className="fade-swiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-content">
            <img 
              src={slide.image} 
              alt={`Fade Slide ${slide.id}`}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FadeSlider;


