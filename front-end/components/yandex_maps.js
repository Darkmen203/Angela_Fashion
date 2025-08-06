'use client';
import React, { useEffect } from 'react';


export default function Yandex_maps(){
    const containerRef = React.useRef(null);
    useEffect(()=>{ 
        const script = document.createElement('Script');
        script.src='https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0798843996326abb2c9d64c8d2bf36c71e07b3c03f3c744a2f02af889295ce01&amp;width=815&amp;height=360&amp;lang=hy_AM&amp;scroll=true', 
        containerRef.current.appendChild(script); 
    }, []);
    return (
        <>
            <div className='yandex_maps' ref={containerRef}> </div>
            
        </>    
    );
}