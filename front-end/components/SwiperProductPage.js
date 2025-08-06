'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// import Swiper core and required modules
import { Navigation, A11y, Thumbs, FreeMode } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';


export default function SwiperProductPage({ data, url_api }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>

            <Swiper
                id='Swiper'
                modules={[Navigation, A11y, Thumbs, FreeMode]}
                // direction='horizontal'
                freeMode
                // rewind='true'
                thumbs={{ swiper: thumbsSwiper }}
                // spaceBetween={1}
                // width={300}
                className='MySwiper'

                style={{ boxShadow: 0 + 'px ' + 0 + 'px ' + 9 + 'px ' + 7 + 'px rgba(0, 0, 0, 0.2)', border: 'none', height: 'auto' }}
            >
                {data.map((item) => {
                    return (

                        <SwiperSlide key={'Slide' + item.id}>
                            <div className="slide_slider h-[32rem] h-[33.6rem]" style={{
                                background: `url(${url_api}${item.attributes.formats.small.url}) no-repeat center / cover`
                            }}>
                                <Image
                                    src={url_api + item.attributes.formats.small.url}
                                    alt=""
                                    width={100}
                                    height={100}
                                    sizes="50vw"
                                    style={{
                                        objectFit: 'contain',
                                        width: 'auto',
                                        height: 'auto',
                                        display: 'none'
                                    }}
                                />
                            </div>
                        </SwiperSlide>

                    )
                })}
            </Swiper>

            <Swiper
                id='SwiperThumbs'
                spaceBetween={10}
                slidesPerView={2}
                freeMode={true}
                watchSlidesProgress
                // width={300}
                onSwiper={setThumbsSwiper}

            >
                {data.map((item) => {
                    return (

                        <SwiperSlide key={'ThumbsSlide' + item.id}>
                            <div className=" h-20" style={{
                                background: `url(${url_api}${item.attributes.formats.small.url}) no-repeat center / contain`,
                                // backgroundSize: 'cover'
                                backgroundClip: 'border-box'
                            }}>
                                <Image
                                    src={url_api + item.attributes.formats.small.url}
                                    alt=""
                                    width={100}
                                    height={100}
                                    sizes="50vw"
                                    style={{
                                        objectFit: 'cover',
                                        width: 'auto',
                                        height: 'auto',
                                        display: 'none'
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </>
    );

}