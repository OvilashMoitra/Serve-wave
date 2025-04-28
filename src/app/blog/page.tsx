"use client"
import BlogCard from "@/components/ui/Blog/BlogCard";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Button, Flex, List, Splitter, Typography } from 'antd';
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
import { useGetAllBlogTagsQuery } from "@/redux/api/blogTagApi";
import { useState } from "react";
import { Empty } from "antd";
import { MdDeleteForever } from "react-icons/md";
export type IBlogTag={
    "id": string,
    "createdAt": Date,
    "updatedAt": Date,
    "blogId": string,
    "tagId": string,
    "tag": {
        "id": string,
        "createdAt": Date,
        "updatedAt": Date,
        "tagName": string
    }
}

export type IBlog={
    "id": string,
    "createdAt": Date,
    "updatedAt": Date,
    "blogTitle": string,
    "blogImage": string,
    "blogContent": string,
    "addedBy": string,
    "tags": IBlogTag[]
}


export const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default function Home() {
  const [blogTag,setBlogTag]=useState("")
    const queryParam=blogTag!==""?`?tagname=${blogTag}`:""
  const { data } = useGetAllBlogQuery(queryParam);

  console.log({blogTag})
  
  const {data:tags}=useGetAllBlogTagsQuery(undefined)
    console.log({ tags });
    let blogs;
    console.log(data?.success);
    if (data?.success && data?.data.length!==0) {
        blogs = data.data?.map((blog:IBlog)=><BlogCard key={blog.id} blog={blog}/>)
    } else if (data?.success && data?.data.length === 0) {
      blogs = <div className="h-screen my-auto">
        <Empty
      description={
        <Typography.Text >
         <p className="text-white"> No blog found</p>
        </Typography.Text>
      }
        className="font-white" />
      </div>
    }
  return (
    <div className='bg-slate-900'>
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
        <Navbar />
        

         
        <Splitter style={{  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1) rtoggle_imGWA' }}>

    <Splitter.Panel defaultSize="20%" resizable={false}>
            <div className="bg-slate-300 rounded-lg  h-screen my-auto sticky">
              <h3 className="text-center h-3  rounded-lg px-6 py-3 mb-4">Select Blog Tag</h3>
              <p className="bg-black w-full"></p>
              {tags?.data?.map(tag => <li
                key={tag.id}
                onClick={() => setBlogTag(tag?.tagName)}
                className={`hover:bg-slate-400 px-2 py-5 rounded-lg ${blogTag===tag?.tagName? 'bg-slate-400':''}`}>
                <p>{tag?.tagName}</p>
                <p className=" text-black"></p>
              </li>)}

              <div className="flex justify-center">
                <Button
                  onClick={()=>setBlogTag("")}
                  color="primary" variant="outlined">
            Clear Filter <MdDeleteForever/>
          </Button>
              </div>
            </div>
    </Splitter.Panel>
    <Splitter.Panel >
            {/* <Desc text="Second" /> */}
            <div className="flex px-10 justify-center py-5 flex-wrap gap-5">
              {blogs}
              </div>
    </Splitter.Panel>
  </Splitter>
              
      <Footer/>
    </div>
    </div>
  )
}
