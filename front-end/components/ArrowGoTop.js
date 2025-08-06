'use client'
import React from 'react';
import Image from 'next/image';

const ArrowGoTop = () => {
    function Go_top(){
        window.scrollTo(0,0);
    }
    
    return (
        <>
            <div onClick={Go_top} className="arrow_gotop" id="arrow_gotop">
                <Image width={20} height={20} src="/img/strelka.svg" alt=""></Image>
                <span> TOP </span>
            </div>
            {/* <Script id='Script_Go_Top'>
                {`
                document.getElementById("arrow_gotop").addEventListener("click", function() {
                    window.scrollTo(0,0);
                })
            `} 
            </Script> */}
        </>
    )
}

export default ArrowGoTop;