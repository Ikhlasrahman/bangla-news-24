import OtherNewsCard from '@/components/OtherNewsCard';
import { notFound } from 'next/navigation';
import React from 'react';

interface MainNewsProps {
        id: string;
        title: string;
        description: string;
        imageUrl: string;
        imageAlt:string;
        category: string;
}

const Categorypage = async ({params}:{params:{categoryId:string}}) => {
    const {categoryId}= await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json();
    const categoryNews:MainNewsProps[] = data.data;
    if(!categoryNews){
            notFound();
        }
    return (
        <div className='mx-auto max-w-7xl'>
           <h2 className='mb-4 border-b-2 border-red-700 pb-2 text-2xl font-bold text-neutral-900'>{data.title}</h2>
            
            <div className='grid grid-cols-3'>
                {categoryNews.map(n=><OtherNewsCard news={n} key={n.id}/>)}
            </div>
        </div>
    );
};

export default Categorypage;