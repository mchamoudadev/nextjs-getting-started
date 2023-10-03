import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

const PostInfoPage = async ({ params }) => {

    const data = await fetch(`http://localhost:3000/api/posts/${params.id}`);

    const post = data.ok ? await data.json() : null;

    if (!post) notFound();

    return (
        <Suspense fallback={<p>Loading post info ...</p>}>

            <h1>PostInfoPage</h1>

            <span>{post.title}</span>

        </Suspense>
    );
};

export default PostInfoPage;