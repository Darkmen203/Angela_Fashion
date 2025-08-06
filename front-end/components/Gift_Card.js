'use client';
import Image from 'next/image';

import React, { useEffect } from 'react'

const Gift_Card = () => {
    useEffect(() => {
        const elem = document.querySelectorAll('.gift_cards_item');
        // const elem = document.getElementById('gift_card_item_one');

        document.addEventListener('scroll', function () {

            elem.forEach((element) => {
                const posTop = element.getBoundingClientRect().top;

                //     // Блок достиг верхней границы экрана (или выше)
                //     // elem.classList.toggle('visible', posTop <= 0);
                //     console.log(posTop + ' ' + window.innerHeight)
                //     // Блок только появляется снизу (или выше)
                //     element.classList.toggle('visible', posTop < window.innerHeight && posTop > 0);
                element.classList.toggle('visible', posTop < (window.innerHeight / 2) && posTop > 50);

            })
            // const posTop = elem.getBoundingClientRect().top;

            // console.log(posTop + ' ' + window.innerHeight)
            // // Блок только появляется снизу (или выше)
            // elem.classList.toggle('visible', posTop < (window.innerHeight - 20) && posTop > 60);
            // Блок целиком находится в видимой зоне
            // elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
        });
    })
    return (
        <>
            <section className='gift_card'>
                <div className='gift_cards_item' id='gift_card_item_one'>
                    <img src="/gift_card/Karta (2).png" alt="" />
                </div>
                <div className='gift_cards_item'>
                    <img src="/gift_card/Karta (2).png" alt="" />
                </div>
                <div className='gift_cards_item'>
                    <img src="/gift_card/Karta (2).png" alt="" />
                </div>
            </section>

        </>
    )
}

export default Gift_Card