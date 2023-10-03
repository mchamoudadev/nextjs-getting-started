import React, { Suspense } from 'react';
import PostList from './PostList';
import PostSkeleton from '../components/PostSkeleton';


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