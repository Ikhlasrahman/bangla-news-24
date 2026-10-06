import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (
        <div className="flex justify-center gap-4 py-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>    
        </div>
    );
};

export default NavLinks;