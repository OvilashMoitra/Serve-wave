"use client"
import BlogDetails from '@/components/ui/Blog/BlogDetails';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { useGetAllBlogQuery } from '@/redux/api/blogApi';
import { Divider } from 'antd';
import { IBlog } from '../../page';
import BlogCard from '@/components/ui/Blog/BlogCard';



const SingleBlogView = ({ params }: { params: { id: string,category:string } }) => {
    const query = `?tagname=${params.category}`

    const { data } = useGetAllBlogQuery(query)
    
    console.log(data)
    return (
        <div className='bg-slate-900'>
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
                <Navbar />
                <div className='flex w-[90vw] flex-wrap py-5 mx-auto'>
                    <BlogDetails id={params?.id} />

                    <div>
                    {/* <Divider  /> */}
                        <p>Related Blog</p>
                        <div>
                        {data?.data.map((blog:IBlog)=><BlogCard key={blog.id} blog={blog}/>)}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default SingleBlogView;