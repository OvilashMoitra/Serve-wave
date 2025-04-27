/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import DynamicTable from '@/components/ui/Table/DynamicTable';
import { useGetAllBlogQuery } from '@/redux/api/blogApi';
import { Button, Tag } from 'antd';
import Link from 'next/link';


// fetch the data and mutate it make column
const columns = [
  { title: 'Blog Title', dataIndex: 'blogTitle', key: '1' },
  {
    title: 'Tag',
    dataIndex: 'blogTags', key: '2',
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },

  {
    title: 'Action',
    key: '4',
    dataIndex: 'Operation'
  },
]


const page = () => {
  // !hook
  const { data, isLoading } = useGetAllBlogQuery(undefined);
  // !function
  function extractTags(blogData:Record<any, string>) {
    if (blogData.tags && Array.isArray(blogData.tags)) {
        return blogData.tags.map(tag => tag.tag.tagName);
    }
    return [];
}
  const columnData = data?.data?.map((elem: Record<any, string>) => {
    return {
      blogTitle: elem?.blogTitle,
      blogTags: extractTags(elem).map(tag => String(tag)),
      Operation: <Link href={`/content_manager/blog/${elem?.id}`}>Update</Link>,
    };
  }) ?? [];

    return (
        <div>
            <div className='flex justify-end p-10'>
          <Button
            style={{background:"blue",color:"white"}}
                    type="primary"
                    className='my-5'
               >
                <Link href={'/content_manager/blog/create'}>Create</Link>
              </Button>
            </div>
        <DynamicTable
          // isLoading={isLoading}
          columns={columns}
          dataSource={columnData}
            />
        </div>
    );
};

export default page;