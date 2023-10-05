import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';
import { getBaseUrl } from '../../util/baseURL';


export const dynamic = 'force-dynamic';

const PostInfoPage = async ({ params }) => {

    const baseURL = getBaseUrl();
    const data = await fetch(`${baseURL}/api/post/${params.id}`);

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