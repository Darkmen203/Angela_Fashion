import React from 'react'
import SwiperProductPage from '@/components/SwiperProductPage';


const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

const ProductIdContent = async ({ id }) => {
    const products_fetch = await fetch(`${API_URL}/api/products?populate=*&filters[$and][0][id][$eq]=${id}}`, {
        method: 'GET', contentType: 'application/json', withCredentials: true,
        credentials: 'include', next: { revalidate: 120 }, headers: {
            'Authorization': `Bearer ${API_TOKEN}`
        }
    });
    const products = await products_fetch.json();
    const imagedata = products.data.attributes;
    // console.log(products.data)
    return (
        <>
            {products.data.map((item) => {
                return (
                    <>
                        {/* //w-1/2 */}
                        <div className="lg:w-[26.2rem] sm:w-1/2 w-[92%] mx-auto lg:h-auto  object-cover object-center rounded-lg md:mx-auto shadow-sm shadow-gray-400">
                            <SwiperProductPage data={products.data[0].attributes.image.data} url_api={API_URL} />
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className=" cursor-default text-gray-900 text-3xl title-font font-medium mb-1 border-y-black border-solid border-b-2 text-center pb-8">{item.attributes.title}</h1>
                            <div className="flex flex-col mb-4 mt-3">
                                <p className="ml-6 leading-relaxed cursor-default min-h-[300px]">{item.attributes.description_products}
                                </p>

                            </div>
                            <div className="flex mt-9 items-center pb-5 pt-8 border-t-2 border-black mb-5">

                                <div className="flex flex-col ml-6">
                                    <div className="pricesection text-black font-serif text-3xl">
                                        <span className="mr-3  cursor-default">Գինը՝</span>
                                        <span className="price">{item.attributes.Price} &#1423;</span>
                                    </div>
                                    {/* {`navbuttonCategory ${pathname === item.href ? 'active' : ''} w-full py-3 mb-0.5 rounded-xl`} */}
                                    <div className="sizesclothessection text-black ">
                                        <span className="mr-3  cursor-default text-[1.75rem]">Առկա չափսերը՝</span>
                                        <span className={` text-[2rem] px-5 ${item.attributes.sizes.XS ? 'text-black' : 'text-black/[20%]'} `}>XS</span>
                                        <span className={` text-[2rem] px-5 ${item.attributes.sizes.S ? 'text-black' : 'text-black/[20%]'} `}>S</span>
                                        <span className={` text-[2rem] px-5 ${item.attributes.sizes.M ? 'text-black' : 'text-black/[20%]'} `}>M</span>
                                        <span className={` text-[2rem] px-5 ${item.attributes.sizes.L ? 'text-black' : 'text-black/[20%]'} `}>L</span>
                                        <span className={` text-[2rem] px-5 ${item.attributes.sizes.XL ? 'text-black' : 'text-black/[20%]'} `}>XL</span>
                                    </div>


                                </div>
                                {/* <button className="flex ml-auto mr-6 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded shadow-inner shadow-black border-none fake-buy_button buy_button">Button</button> */}

                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default ProductIdContent