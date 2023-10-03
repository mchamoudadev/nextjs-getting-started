import React from 'react';

const PostSkeleton = () => {
    return (
        <div className='space-y-4'>
            <div className='h-4 w-full bg-slate-400 p-2 animate-pulse py-4'></div>
            <div className='h-4 w-full bg-slate-400 p-2 animate-pulse py-4'></div>
            <div className='h-4 w-full bg-slate-400 p-2 animate-pulse py-4'></div>
            <div className='h-4 w-full bg-slate-400 p-2 animate-pulse py-4'></div>
            <div className='h-4 w-full bg-slate-400 p-2 animate-pulse py-4'></div>
            <div className='h-4 w-full bg-slate-400 p-2 animate-pulse py-4'></div>
            <div className='h-4 w-full bg-slate-400 p-2 animate-pulse py-4'></div>
            <div className='h-4 w-full bg-slate-400 p-2 animate-pulse py-4'></div>

        </div>
    );
};

export default PostSkeleton;