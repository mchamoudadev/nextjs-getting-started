import Link from 'next/link';
import React, { Suspense } from 'react';

const PostList = async () => {

    // await new Promise((resolve,) => setTimeout(resolve, 15000));

    const data = await fetch('http://localhost:3000/api/posts');

    const posts = await data.json();

    return (
        <>
            <h1 className='text-4xl text-gray-800 font-bold'>Posts List</h1>
            {
                posts.map(post => (
                    <Link className='flex p-4 border-blue-300 border-b-2 bg-slate-200' href={`/posts/${post.id}`} key={post.id}>{post.title}</Link>
                ))
            }
        </>
    );
};

export default PostList;