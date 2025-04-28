/* eslint-disable @next/next/no-img-element */
import { IBlog } from '@/app/blog/page';
import { useGetBlogByIdQuery } from '@/redux/api/blogApi';
import parse from 'html-react-parser';
import Link from 'next/link';
import React from 'react';
import moment from 'moment';


const BlogDetails = ({ id }: { id: string }) => {
    // ! hooks
    const { data } = useGetBlogByIdQuery(id)

    let blog: IBlog=data?.data

    console.log(blog);
    return (
        <>
            {/* // < !--Blog Article-- > */}
            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0  lg:gap-x-12">
                    {/* <!-- Content --> */}
                    <div className="lg:col-span-2">
                        <div className="py-8 lg:pr-4 ">
                            <div className="space-y-5 lg:space-y-8">
                                <Link className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400" href="/blog">
                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                    Back to Blog
                                </Link>

                                <h2 className="text-3xl font-bold lg:text-4xl dark:text-white">{blog?.blogTitle}</h2>

                                <div className="flex items-center gap-x-5">
                                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">{moment(blog?.createdAt).format("dddd, MMMM Do YYYY")}</p>
                                </div>

                                <img className='w-full rounded-2xl' src={blog?.blogImage} alt={blog?.blogTitle} />

                                <div className="text-lg text-gray-800 dark:text-gray-200">
                                    {parse(`${blog?.blogContent}`)}
                                </div>

                                <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                                    {blog?.tags?.map(tag => <p key={`${tag}`} className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm text-black bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 " >
                                           {tag?.tag?.tagName}
                                        </p>)}
                                    <div>
                                    </div>
                                    {/* <!-- End Badges/Tags --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Content --> */}

                    {/*
                    <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
                        <div className="sticky top-0 left-0 py-8 lg:pl-4 lg:pl-8">
                            {/* <!-- Avatar Media --> */}
                            {/* <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                                <a className="block flex-shrink-0" href="#">
                                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                                </a>

                                <a className="group grow block" href="">
                                    <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                        Leyla Ludic
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        UI/UX enthusiast
                                    </p>
                                </a>

                                <div className="grow">
                                    <div className="flex justify-end">
                                        <button type="button" className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs">
                                            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                            </svg>
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- End Avatar Media --> */}

                            {/* <div className="space-y-6"> */}
                                {/* <!-- Media --> */}
                                {/* <a className="group flex items-center gap-x-6" href="#">
                                    <div className="grow">
                                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                                            5 Reasons to Not start a UX Designer Career in 2022/2023
                                        </span>
                                    </div>

                                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                                        <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
                                    </div>
                                </a> */}
                                {/* <!-- End Media --> */}

                                {/* <!-- Media --> */}
                                {/* <a className="group flex items-center gap-x-6" href="#">
                                    <div className="grow">
                                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                                            If your UX Portfolio has this 20% Well Done, it Will Give You an 80% Result
                                        </span>
                                    </div>

                                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                                        <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
                                    </div>
                                </a> */}
                                {/* <!-- End Media --> */}

                                {/* <!-- Media --> */}
                                {/* <a className="group flex items-center gap-x-6" href="#">
                                    <div className="grow">
                                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                                            7 Principles of Icon Design
                                        </span>
                                    </div>

                                    <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                                        <img className="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
                                    </div>
                                </a> */}
                                {/* <!-- End Media --> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                    
                </div>
            </div>
            {/* <!--End Blog Article-- > */}
        </>
    );
};

export default BlogDetails;