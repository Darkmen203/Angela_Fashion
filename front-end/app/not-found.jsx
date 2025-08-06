import Link from 'next/link';

import './404.css';

export default function Custom404() {
    return (
        <div>
            <main className='flex text-center justify-center align-middle text-white'>
                <Link href="/">
                    <div className="container flex flex-col mt-96">

                        <div>
                            <p className="text-9xl" >404</p>

                        </div>

                        <div className="text w-72  pt-5">
                            <article>
                                <p>О нет! Похоже вы заблудились, вернитесь назад или на главную страницу</p>
                            </article>
                        </div>

                    </div>
                </Link>
                {/* <Link href="/" className="text-center mx-auto"><div className="container font-sans flex justify-center flex-col text-center w-64 mx-auto">

                <div className="scene w-72" >
                    <p className="p404 text-white text-9xl" >404</p>

                </div>

                <div className="text w-72 text-center text-white pt-5">
                    <article>
                        <p>О нет! Похоже вы заблудились, вернитесь назад или на главную страницу</p>
                    </article>
                </div>

            </div>
            </Link> */}
            </main>
        </div>
    );
}