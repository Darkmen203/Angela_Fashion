'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const CategoryBar = ({ items }) => {
    const pathname = usePathname();
    return (
        <section className='category h-auto w-1/4 md:w-1/3 lg:w-1/3 xl:w-1/4 mt-5 overflow-hidden rounded-3xl hidden md:block '>
            {items.map(item => (
                <button key={item.title} className={`navbuttonCategory ${pathname === item.href ? 'active' : ''} w-full py-3 mb-0.5 rounded-xl`}
                    id={item.title}>
                    <Link href={item.href} className={'py-2 text-center w-full text-xl flex flex-column justify-center'}>
                        <Image src={item.icon} width={'15'} height={'15'} alt='' className='w-auto h-auto my-auto mx-0'></Image>
                        <span>{item.title}</span>
                    </Link>
                </button>
            ))}
        </section>
    );
};

export default CategoryBar;




