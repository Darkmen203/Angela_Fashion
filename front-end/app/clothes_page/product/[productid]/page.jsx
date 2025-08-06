
import React from 'react';
import './product_page.css';
import { headers } from "next/headers";
import ProductIdContent from '@/components/ProductIdContent';






const productid = async () => {
    // const product_info_fetch = await GETProduct()
    const idpage = headers().get("x-invoke-path").slice(29);
    return (
        <>
            <main className='mt-32 w-screen'>
                <div className="flex flex-wrap lg:w-4/5 mx-auto md:items-center">
                    <ProductIdContent id={idpage}/>
                
                    
                    {/* <Image alt="ecommerce" className="lg:w-1/2  w-full sm:w-11/12 lg:h-auto h-64 object-cover object-center rounded-lg md:mx-auto shadow-sm shadow-gray-400" width="0" height="0" sizes="100vw" src="https://dummyimage.com/400x400"></Image> */}
                    
                    
                </div>
                
            </main>
        </>
    );
};

export default productid;