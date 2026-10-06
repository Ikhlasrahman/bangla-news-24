import Link from 'next/link';
import React from 'react';
interface NavLinksProps {
 slug: string;
 title: string;
 topicId: string | null;
 url: string;
 scrapable: boolean;

}
const NavLinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs: NavLinksProps[] = data.data;
    const filterNavs = navs.filter(n=>n.scrapable)
    return (
        <div className="flex justify-center gap-4 py-2">
            <Link href="/" className="text-gray-600 hover:text-gray-900">হোম</Link>
                {filterNavs.map((n,i)=><Link key={i} href={n.slug} className="text-gray-600 hover:text-gray-900">{n.title}</Link>)}
        </div>
    );
};

export default NavLinks;