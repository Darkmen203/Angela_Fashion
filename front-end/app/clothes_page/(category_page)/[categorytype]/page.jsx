import React from 'react';
import Image from 'next/image';
// const API_URL = process.env.API_URL;
// const API_TOKEN = process.env.API_TOKEN;
const API_URL = 'http://localhost:1337';
const API_TOKEN = '5c158067ac03aa6847cbb264d3ec13a1a58baae26ef54a3d27bd61eb7ac491fb30720cd7d3e6d64b1ef650c09fe4a4324cb8589bab236f3a38765ad5c4bdf040288890c44c7feb8da8f1c81bcb71c4f5b1ba52049a785b3efc18249b657f81ba5b91e5a4699683e101e869325db0d9d02d812f960faf397cebd6a8cd4229c300';

const jsonForFetch = `${process.env.CategoryFetch}`;

export default async function categorytype({ params }) {
    // console.log(API_URL + '123')
    // console.log('1'+API_TOKEN)
    // `
    let jsonObjForFetch = JSON.parse(`${jsonForFetch}`);

    const products_fetch = await fetch(`${API_URL}/api/products?populate=*&filters[$and][0][category][$eq]=${jsonObjForFetch[params.categorytype]}`, {
        method: 'GET', contentType: 'application/json', withCredentials: true,
        credentials: 'include', next: { revalidate: 120 }, headers: {
            'Authorization': `Bearer ${API_TOKEN}`
        }
    });

    const products = await products_fetch.json();
    // console.log(products.data[0].attributes.image.data[0].attributes.formats.small.url)
    const url_image = API_URL;
    return (
        <>

            <section className='main_shop mt-5 w-full md:w-3/4 '>
                <div className="flex flex-wrap">
                    {products.data.map((item) => {

                        return (

                            <div key={item.id} className="xl:w-1/4 lg:w-1/2 md:w-1/2 p-4 w-full flex flex-col items-center justify-center">
                                <a href={`/clothes_page/product/${encodeURIComponent('product' + item.id)}`} className="block relative w-3/4 h-96 md:h-64 rounded overflow-hidden">
                                    <Image alt="" fill sizes="(min-width: 768px) 50, (min-width: 1024px) 50%, 100%" className="object-cover object-center w-full h-full block" src={url_image + item.attributes.image.data[0].attributes.formats.small.url} />

                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.attributes.title}</h2>
                                    <p className="mt-1">${item.attributes.Price}</p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>
        </>
    );

}