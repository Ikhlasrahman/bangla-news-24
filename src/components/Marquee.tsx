import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface HeadlineProps {
    title: string;
    url: string;
    source: string;
    published_at: string;
}

const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await res.json();
    const headlines : HeadlineProps[] = data.data;
    console.log(headlines);
    return (
        <div className="bg-red-700 text-white">
            <div className="flex items-center max-w-7xl mx-auto">
                <div className="font-bold bg-red-950 py-2 px-4">সর্বশেষ</div>
                <MarqueeText
                    duration={20}
                    pauseOnHover={true}
                    direction="right"
                >
                    {headlines.map((h, i) => <div key={i}>
                        <span>
                            <span>{h.title}</span>
                            <span className='mx-2 text-white'>•</span>
                        </span>
                    </div>)}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;