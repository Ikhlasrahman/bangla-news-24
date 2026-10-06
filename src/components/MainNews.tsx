import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MainNewsProps {
    news: {
        id: string;
        title: string;
        description: string;
        imageUrl: string;
        category: string;
    }[];
}

const MainNews = ({ news }: MainNewsProps) => {
    const [firstNews, ...otherNews] = news;
    // console.log(otherNews);
    return (
        <div className="flex flex-row gap-4 mt-4">

            {/* Main news */}
            <div>
                <Link href="/">
                    <div className="card w-96 bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <figure>
                            <Image
                                src={firstNews.imageUrl}
                                alt={firstNews.title}
                                width={500}
                                height={300}
                            />
                        </figure>

                        <div className="card-body">
                            <p className="text-red-700">
                            {firstNews.category}
                        </p>
                            <h2 className="card-title">
                                {firstNews.title}
                            </h2>

                            <p>{firstNews.description}</p>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Other news */}
            <div className="flex flex-col gap-3">
                {otherNews.slice(0,4).map((o) => (
                    <div
                        key={o.id}
                        className="rounded-box bg-base-100 p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <p className="text-red-700">
                            {o.category}
                        </p>

                        <h3>
                            {o.title}
                        </h3>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MainNews;