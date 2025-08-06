import Image from 'next/image';
import Script from 'next/script';
import Yandex_maps from '@/components/yandex_maps';
import Gift_Card from '@/components/Gift_Card';

import './style/home.css';


import SwiperHome from '@/components/SwiperHome';
import { Arizonia } from 'next/font/google';
const arizonia = Arizonia({ weight: '400', subsets: ['latin'], display: 'swap'});


export default function Home() {
    
    return (

        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
            />

            <Script defer src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></Script>
            <main>
                <div className="main_photo">

                    <span > ANGELA </span>
                    <p className={`sub_brand ` + arizonia.className}>FASHION</p>

                    <div className="arrow-down">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <SwiperHome/>

                <Gift_Card/>
                
                
                <div className="about_shop">
                    <div id='photo_shop'>
                        <Image src="/img/Rectangle 2.png" alt="" width={100}
                            height={100} />
                    </div>

                    <div className="text_about" id='text_about'> <p> Մեր հագուստի սրահը գտնվում է Իջևան քաղաքի կենտրոնում:
                        Այստեղ գրեթե բոլոր տարիքային սահմանի կանայք և աղջիկները կարող են գտնել իրենց երազանքի հագուստը:
                        Մենք կատարում ենք առաքում ամբողջ Հայաստանի տարացքում:
                    </p>
                    <Yandex_maps />


                    </div>
                </div>
            </main>
        </>

    );
}
