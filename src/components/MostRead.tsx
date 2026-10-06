import React from 'react';

interface MostRead {
    id:string;
    rank:number;
    title:string;
}
const MostRead = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json();
    const mrData = data.data;
    
    return (
        <div className="mt-2">
            <ol className="list rounded-box bg-base-100 shadow-md">

                {/* Card heading */}
                <div className="p-4 pb-2 text-2xl tracking-wide ">
                    সর্বাধিক পঠিত
                </div>

                {/* All items inside the same card */}
                {mrData.map((mr:MostRead) => (
                    <li className="list-row items-center" key={mr.id}>

                        <div className="text-2xl font-bold tabular-nums">
                            {mr.rank}
                        </div>

                        <div className="list-col-grow">
                            <div>{mr.title}</div>
                        </div>

                    </li>
                ))}

            </ol>
        </div>
    );
};

export default MostRead;