"use client";
import React from 'react';
import { signOut } from 'next-auth/react';

const SignOut = () => {



    const handleLogin = () => {
        signOut();
    };


    return (
        <div>
            <button
                className='bg-green-500 p-4 rounded-md'
                onClick={handleLogin}>Logout</button>
        </div>
    );
};

export default SignOut;