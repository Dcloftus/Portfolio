import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './CardStack.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const CardStack = ({ items }) => {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className='mySwiperSlide'>
                    <div>{item}</div>
                </SwiperSlide>
            ))}
        </Swiper>
    )}

export default CardStack;