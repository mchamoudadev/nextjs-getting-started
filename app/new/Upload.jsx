"use client";
import React, { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { getBaseUrl } from '../util/baseURL';

export const dynamic = 'auto';
const Upload = () => {

    const baseURL = getBaseUrl();

    const [imageUrl, setImageUrl] = useState(null);
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();


        const registerPost = await fetch(`${baseURL}/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, content, url: imageUrl })
        });

        setContent("");
        setTitle("");
        setImageUrl(null);

        router.push('/');


    };


    return (
        <div className='h-auto mx-auto  flex justify-center items-center max-w-4xl mt-24'>

            <div className='flex flex-col space-y-6'>
                <form onSubmit={handleSubmit} className="bg-white p-6 max-w-sm mx-auto rounded-md shadow-md">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm text-gray-600 mb-2">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:border-indigo-500 focus:ring"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm text-gray-600 mb-2">Content:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:border-indigo-500 focus:ring"
                            required
                        ></textarea>
                    </div>

                    <CldUploadWidget uploadPreset="lunuwzor"
                        onUpload={(result, widget) =>
                            // @ts-ignore
                            setImageUrl(result.info.url)}
                    >
                        {({ open }) => {

                            return (
                                <button className="bg-indigo-700 py-4 px-2 rounded-md m-4 text-white" onClick={(e) => { e.preventDefault(); open(); }}>
                                    Upload an Image
                                </button>
                            );
                        }}
                    </CldUploadWidget>
                    {imageUrl && (
                        <div className="mb-4">
                            <label className="block text-sm text-gray-600 mb-2">Image Preview:</label>
                            <img src={imageUrl} alt="Preview" className="w-full h-64 object-cover rounded-md" />
                        </div>
                    )}

                    {imageUrl && (<button type="submit" className="w-full bg-indigo-700 py-2 px-4 rounded-md text-white">
                        Create the post
                    </button>)}
                </form>

            </div>
        </div>
    );
};

export default Upload;