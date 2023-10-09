
import React from 'react';
import Link from 'next/link';

import { useSession } from 'next-auth/react';

import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
const Navbar = async () => {

    // const { data } = useSession();

    // @ts-ignore
    const data = await getServerSession(authOptions);


    console.log("session", data);



    return (
        <div className='flex justify-around items-center bg-gray-100 shadow-md container mx-auto p-4'>
            <Link href="/posts">Logo</Link>
            <div className='space-x-2'>
                <Link href="/admin">Admin</Link>
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/api/auth/signin">Login</Link>
            </div>
            <div className='flex items-center space-x-4'>
                {data ? <>
                    < img className='w-10 h-10 rounded-full' src=
                        // @ts-ignore
                        {data.user.image} />
                    <div>
                        <span>Welcome</span>
                        {/* @ts-ignore */}
                        <span className='font-bold'> {data.user.name}</span>
                    </div>
                    <SignOut />
                </> : <SignIn />}
            </div>
        </div >
    );
};

export default Navbar;;