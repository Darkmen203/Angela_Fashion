import React from 'react';
import Link from 'next/link';
import './navbar.css';
import Script from 'next/script';

import { Arizonia } from 'next/font/google';
import Image from 'next/image';
const arizonia = Arizonia({ weight: '400', subsets: ['latin'], display: 'swap', });


const NavBar = () => {
    return (
        <>
            <header id='header' className='header'>
                <span className={`header_name `+arizonia.className }> <Link href={'/'}> Angela </Link></span>

                <button className="Menu_button" id="Menu_button"> <Image width={30} height={30} src="/img/Mask group.svg" alt=""></Image></button>


                <nav className="navbar_header">
                    <button> <Link href="/"> <span> Գլխավոր էջ </span>  </Link></button>
                    <button> <Link href="/clothes_page"> <span> ՀԱԳՈՒՍՏ </span> </Link> </button>
                    <button> <Link href="/acs_page"> <span> ԱՔՍԵՍՈՒԱՐՆԵՐ </span> </Link> </button>
                    <button className="Krestik" id="Krestik"> <Image width={30} height={30} src="/img/Krestik.svg" alt=""></Image> </button>
                </nav>
            </header>
            <Script id='Script_Bg_header'>{
                `       const header = document.getElementById('header'); // Здесь класс вашей шапки
                        window.addEventListener('scroll', function () {
                            if (window.scrollY >= 54) {
                                header.classList.add('scrolled'); // Добавить класс, который будет менять стили
                            } else {
                                header.classList.remove('scrolled'); // Убрать
                            }
                        });
                        document.getElementById("Menu_button").addEventListener("click", function() {
                            document.getElementById("Menu_button").style.display = 'none'
                            document.getElementsByClassName("header_name")[0].style.display = 'none'
                            document.querySelector('.navbar_header').classList.add("openned") 
                            document.getElementById("Krestik").style.display = 'block'
                            document.getElementsByTagName("body")[0].style.overflowY = 'hidden'
                            header.classList.remove('scrolled');
                        })
                        
                        document.getElementById("Krestik").addEventListener("click", function() {
                            document.querySelector('.navbar_header').classList.remove("openned") 
                            document.getElementById("Krestik").style.display = 'none'
                            document.getElementsByTagName("body")[0].style.overflowY = 'visible'
                            setTimeout(() =>{
                                document.getElementsByClassName("header_name")[0].style.display = 'block'
                                document.getElementById("Menu_button").style.display = 'block'
                                if (window.pageYOffset >= 54) 
                                    header.classList.add('scrolled'); 
                            }, 180); 
                        }) 
                        `
            }</Script>
        </>
    );
};

export default NavBar;



