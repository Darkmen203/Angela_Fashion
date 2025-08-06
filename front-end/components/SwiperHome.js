'use client';
import React from 'react';
import Image from 'next/image';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function SwiperHome() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            direction='horizontal'
            loop='true'
            autoplay={{
                delay: 4000,
                disableOnInteraction: 'true'

            }}
            rewind='true'
            centeredSlides='true'
            effect='carousel'
            spaceBetween={450}
            slidesPerView={1}
            navigation
            style={{boxShadow: 0 + 'px ' + 0 + 'px ' + 9 + 'px ' + 7 + 'px rgba(0, 0, 0, 0.2)', border: 'none' }}
            // pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="slide_slider" id='slide_1' style={{
                    background: 'url(/img/in_slider_1.webp) no-repeat content-box'
                }}>
                    <Image
                        alt=""
                        src="/img/in_slider_1.webp"
                        width={100}
                        height={100}
                        sizes="70vw"
                        style={{
                            objectFit: 'contain',
                            width: 'auto',
                            height: 'auto'
                        }}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide_slider" id='slide_2' style={{
                    background: 'url(/img/in_slider_2.webp) no-repeat content-box'  
                }}>
                    <Image
                        src="/img/in_slider_2.webp"
                        alt=""
                        width={100}
                        height={100}
                        sizes="70vw"
                        style={{
                            objectFit: 'contain',
                            width: 'auto',
                            height: 'auto'
                        }}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide_slider" id='slide_3' style={{
                    background: 'url(/img/in_slider_3.webp) no-repeat',
                }}>

                    <Image
                        alt=""
                        src="/img/in_slider_3.webp"
                        width={100}
                        height={100}
                        sizes="70vw"
                        style={{
                            objectFit: 'contain',
                            width: 'auto',
                            height: 'auto'
                        }}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide data-swiper-autoplay="7000">
                <div id='slide_4' className="slide_slider" >
                    <video autoPlay loop muted className="bgvideo" id="bgvideo" pip="false">
                        <source src="/img/IMG_8451.MOV" type="video/mp4"></source>
                    </video>
                </div>
            </SwiperSlide>

        </Swiper>
    );
}