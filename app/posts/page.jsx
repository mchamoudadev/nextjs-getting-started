import React, { Suspense } from 'react';
import PostList from './PostList';


export const dynamic = 'force-dynamic';
const PostsPage = () => {
    return (
        <>
            <div>
                <h1 className='text-2xl font-bold '>Posts Page</h1>
                {/* <Suspense fallback={<PostSkeleton />}> */}
                <PostList />
                {/* </Suspense> */}
            </div>
        </>
    );
};

export default PostsPage;