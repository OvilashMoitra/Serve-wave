/* eslint-disable @next/next/no-img-element */
import { IBlog } from '@/app/blog/page';
import Link from 'next/link';
import parse from 'html-react-parser';
import moment from 'moment';

const BlogCard = ({ blog }: { blog: IBlog }) => {
    console.log(blog?.tags[0].tag?.tagName)
    return (
        <Link className="group w-[350px] h-[600px] flex flex-col  border border-black hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-500 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href={`/blog/${blog?.tags[0].tag?.tagName}/${blog.id}`}>
            <div className="aspect-w-16 aspect-h-11">
                <img className="w-full h-[300px]  rounded-xl" src={blog?.blogImage} alt="Image Description" />
            </div>
            <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                    {blog.blogTitle}
                </h3>
                <p className="mt-5 text-gray-600 dark:text-gray-400">
                    {
                        parse(`${blog.blogContent.slice(0, 100)}`)
                        
                    }...
                </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
                <div>
                <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">{moment(blog?.createdAt).format("dddd, MMMM Do YYYY")}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;