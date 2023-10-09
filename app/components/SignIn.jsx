"use client";
import React from 'react';
import { signIn } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa6';

const SignIn = () => {

    const handleLogin = () => {
        signIn();
    };


    return (
        <div className=''>
            <button onClick={handleLogin} className='rounded-md shadow-md flex items-center p-6 space-x-6'>
                <FaGoogle className='w-6 h-6 text-red-500 mx-2' />
                Login With Google
            </button>
        </div>
    );
};

export default SignIn;