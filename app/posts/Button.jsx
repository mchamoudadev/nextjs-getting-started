"use client";
import React from 'react';

const Button = () => {
    return (
        <button onClick={() => console.log("hey man")} className='bg-red-500 p-4'>Click Me</button>
    );
};

export default Button;