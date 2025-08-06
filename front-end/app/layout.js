import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


import { Suspense } from 'react';
import Loading from './loading';
import NavBar from '@/components/NavBar';
import Angela_footer from '@/components/Angela_footer';
import ArrowGoTop from '@/components/ArrowGoTop';

export const metadata = {
    title: 'Angela Fashion',
    description: 'Интернет-магазин женской одежды Angela в Армении Иджеван',

    icons: [
        {
            rel: 'shortcut icon',
            url: '/favicon/favicon.ico'
        },
             
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/favicon-16x16.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/favicon/apple-touch-icon.png',
        },
        {
            rel: 'mask-icon',
            color: '#5bbad5',
            url: '/favicon/safari-pinned-tab.svg',
        },
    ],
    // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">+
    // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">+
    // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">+
    // <link rel="manifest" href="/site.webmanifest">+
    // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">+
    // <meta name="msapplication-TileColor" content="#da532c">
    // <meta name="theme-color" content="#ffffff"></meta>
    themeColor: '#ffffff',
    // manifest: '/favicon/manifest.webmanifest'

};

export default function RootLayout({ children }) {
    return (
        <html lang="am">
            <body className={inter.className}>
                <NavBar />
                <Suspense fallback={<Loading/>}>
                    {children}
                </Suspense>
                
                <ArrowGoTop/>

                <Angela_footer/>
            </body>
        </html>
    );
}
