import { Suspense } from 'react';
import Loading from '@/app/loading';

export default async function DashboardLayout({
    children, // will be a page or nested layout
}) {

    return (

        <>

            <Suspense fallback={<Loading />}>
                {children}

            </Suspense>
        </>
    );
}
