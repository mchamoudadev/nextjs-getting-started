import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-gray-100 shadow-md'>
            <Link href="/posts">Logo</Link>
            <div className='space-x-2'>
                <Link href="/admin">Admin</Link>
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/service">service</Link>
            </div>
        </div>
    );
};

export default Navbar;