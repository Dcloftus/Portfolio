import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Carousel.css';

const Carousel = ({ items }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
        {/* Custom navigation buttons */}
        <div className="custom-navigation-wrapper">
            <div className="custom-navigation">
                <button ref={prevRef} className="custom-nav-btn">{"<"}</button>
                <button ref={nextRef} className="custom-nav-btn">{">"}</button>
            </div>
        </div>
        <div className="carousel-wrapper">
            {/* Swiper component */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView="auto"
                grabCursor={true}
                centeredSlides={false}
                // breakpoints={{
                //   640: { slidesPerView: 1 },
                //   768: { slidesPerView: 2 },
                //   1024: { slidesPerView: 3 },
                // }}
                navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="carousel-container"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} style={{ width: '285px', height: '350px' }}>
                        <div>{item}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  );
};

export default Carousel;