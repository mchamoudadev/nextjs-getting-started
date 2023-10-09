import React from 'react';

import { FaGoogle } from 'react-icons/fa6';
import SignIn from '../components/SignIn';

const LoginPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <SignIn />
        </div>

    );
};

export default LoginPage;