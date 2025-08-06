import React from 'react';
import Image from 'next/image';
import './Angela_footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faViber} from '@fortawesome/free-brands-svg-icons';

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ weight: '400', subsets: ['latin'], display: 'swap'});

const Angela_footer = () => {
    return (
        <>
            <footer>
                <div className="footer_logo">
                    <Image width={'18'} height={'18'} src="/img/Ang2.svg" alt=""></Image>
                </div>

                <div className="footer_rights_contact">
                    <div className="footer_contact">
                        <div className={"title_contact text-black " + montserrat.className}><span> Կապ՝ </span></div>
                        <div className={"text_contact text-black " + montserrat.className}>
                            <span> Հայաստան, Իջևան,
                                Անկախության փող., 13 </span>
                            <p> Երկ Երք Չրք Հնգ Ուրբ Շբթ Կիր
                                (10:00-19:00) </p>
                            <p> ( 374-99 ) 854 760 </p>
                        </div>
                    </div>

                    <div className={"footer_text " + montserrat.className}>
                        <span className="Ang" > &copy; </span>
                        <span className="year" > 2023 </span>
                        <span className="right" > &mdash; &nbsp; Բոլոր իրավունքները պաշտպանված են </span>
                    </div>
                </div>

                <div className="footer_icons">
                    <a href="https://instagram.com/angela__fashion_?igshid=MWZjMTM2ODFkZg==" target="_blank" title="Instagram" rel="noopener noreferrer">
                        <div className="footer_icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </a>

                    <a href="https://wa.me/37499854760" target="_blank" title="Facebook" rel="noopener noreferrer">
                        <div className="footer_icon">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                    </a>

                    <a href="https://msng.link/o?37499854760=vi" target="_blank" title="Viber" rel="noopener noreferrer">
                        <div className="footer_icon">
                            <FontAwesomeIcon icon={faViber} />
                        </div>
                    </a>
                    <a href="https://wa.me/37499854760" target="_blank" title="WhatsApp" rel="noopener noreferrer">
                        <div className="footer_icon">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Angela_footer;