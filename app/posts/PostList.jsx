// "use client";
import Link from 'next/link';
import React, { Suspense } from 'react';
import DeleteButton from './DeleteButton';


import { getBaseUrl } from '../util/baseURL';



const PostList = async () => {

    const baseURL = getBaseUrl();

    // await new Promise((resolve,) => setTimeout(resolve, 15000));

    const data = await fetch(`${baseURL}/api/post`);

    const postsData = await data.json();


    return (
        <div className=" mt-24 flex flex-col justify-between items-center ">
            <h1 className="text-4xl font-bold mb-8">Posts List</h1>
            <div className="w-full md:w-2/3 lg:w-1/2">
                <ul>
                    {postsData.map(post => (
                        <li key={post.id} className="mb-6 bg-white p-4 rounded-md shadow-lg">
                            <img src={post.url} alt={post.title} className="w-full h-64 object-cover rounded-md mb-4" />
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                                    <p className="text-gray-600">{post.content}</p>
                                </div>
                                <div>
                                    <DeleteButton id={post.id} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PostList;