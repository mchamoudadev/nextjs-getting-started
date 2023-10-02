import React from 'react';
import Button from './Button';
import Image from 'next/image';
// export const revalidate = 1;
const PostsPage = async () => {

    const posts = await fetch('https://dummyjson.com/products?limit=100', { cache: "no-store" });
    const data = await posts.json();

    return (
        <div>
            <h1>Current Time : {new Date().toLocaleTimeString()}</h1>
            {
                data.products.map(post => (
                    <>
                        <h1 className='p-2 border-b-2'>{post.title}</h1>
                        {/* <img width={200} height={200} src={post.thumbnail} alt={post.title} /> */}
                        <Image width={200} height={200} src={post.thumbnail} alt={post.title} />
                    </>
                ))
            }
            <Button />
        </div>
    );
};

export default PostsPage;