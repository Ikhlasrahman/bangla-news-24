import React from 'react';

const Categorypage = async ({params}) => {
    const {categoryId}= await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json();
    const categoryNews = data.data;
    console.log('check response',data,categoryNews)
    return (
        <div>
            <h2 className='text-2xl'>{data.title}</h2>
        </div>
    );
};

export default Categorypage;