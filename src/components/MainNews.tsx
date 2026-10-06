import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainNews = ({ news }) => {
    const [firstNews, ...otherNews] = news;
    console.log(otherNews);
    return (
        <div>
            <Link href="/">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <Image src={firstNews.imageUrl} alt={firstNews.title} width={500} height={300} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{firstNews.title}</h2>
                        <p>{firstNews.description}</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MainNews;