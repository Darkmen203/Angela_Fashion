// import category_menu_clothes_page from '../components/category_menu_clothes_page'
// import NavBar from '../components/category_menu_clothes_page'
import { Suspense } from 'react';
import CategoryBar from '../components/CategoryBar';
import Loading from './loading';

import './category_page.css'

// const API_URL= process.env.API_URL;
const categoryBarNavItems = [
    {
        title: 'Տոպեր',  //топы
        href: '/clothes_page/tops',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Կիսաշրջազգեստներ',  // Юбки
        href: '/clothes_page/skirts',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Զգեստներ', // Платья
        href: '/clothes_page/dresses',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Տաբաթներ', // Штаны
        href: '/clothes_page/pants',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Բլուզներ',  // блузки
        href: '/clothes_page/blouseswear',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Սվիտերներ',  // свитера
        href: '/clothes_page/sweaterwear',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Ժիլետներ',  // жилеты
        href: '/clothes_page/vestswear',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Hoodies', // худи
        href: '/clothes_page/hoodieswear',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Սպորտային', // спортивное
        href: '/clothes_page/sportwear',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Վերարկուներ', // верхняя одежда
        href: '/clothes_page/outerwear',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    },
    {
        title: 'Майки',
        href: '/clothes_page/t-shirt',
        icon: 'http://127.0.0.1:1337/uploads/swimsuit_cb7cf462cf.svg'
    }, 

];



export default async function DashboardLayout({
    children, // will be a page or nested layout
}) {

    return (

        <main>
            {/* Include shared UI here e.g. a header or sidebar */}
            <div className="title_cite container px-3 py-24 pb-0">
                <div className="flex flex-wrap justify-center w-screen">
                    <div className="lg:w-1/2 w-full lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center mb-2 text-white">Раздел одежды в Angela Fashion</h1>
                        <div className="h-1 w-full bg-stone-50 rounded"></div>
                    </div>
                </div>
            </div>


            <section className="text-gray-600 body-font text-center">
                <div className="container-lg pr-3 pl-5 py-24 flex flex-nowrap w-full items-start">
                    <CategoryBar items={categoryBarNavItems} />
                    <Suspense fallback={<Loading/>}>
                        {children}

                    </Suspense>
                </div>
            </section>
        </main>
    );
}