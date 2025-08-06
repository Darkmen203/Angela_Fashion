import React from 'react';



export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <>
            <div className="container text-center align-middle h-screen flex justify-center items-center ">
                <div className="animate-spin-slow inline-block w-32 h-32 m-12 border-[3px] border-solid border-t-transparent text-blue-50 rounded-full border-pink-500" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    );
        
}