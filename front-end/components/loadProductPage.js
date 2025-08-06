'use client'

import { useRouter } from 'next/navigation';

export async function GETProduct() {
    const url = useRouter();
    return url;
}