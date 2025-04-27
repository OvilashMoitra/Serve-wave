/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FromInput';
import DynamicSelect from '@/components/ui/Form/FromSelect';
import TextEditor from '@/components/ui/TextEditor/TextEditor';
import { localStorageHelper } from '@/helper/credential';
import { useCreateBlogMutation } from '@/redux/api/blogApi';
import { useGetAllBlogTagsQuery } from '@/redux/api/blogTagApi';
import { Button, message } from 'antd';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

type IBlog = {
    blogImage: string;
    blogContent: string;
    addedBy: string;
    blogTitle: string;
}

type ITag = {
    createdAt: string,
    id: string,
    tagName: string
    updatedAt: string
}


const page = () => {
    const [content, setContent] = useState('');
    const [tags, setTags] = useState<string[]>([""])
    const userInfo = localStorageHelper.getUserInfo()
    const [createBlog, { data }] = useCreateBlogMutation()
    const { data: tagsData } = useGetAllBlogTagsQuery(undefined)

    // ! blog tag function
    const onChange = (value: string[]) => {
        setTags(value)
    };

    // ! blog submit function
    const onSubmit: SubmitHandler<IBlog> = async (data) => {
        try {
            if (content.length === 0) {
                message.error('content is required')
                return 
            }
            if (tags.length === 0) {
                message.error('Tags are required')
                return 
            }
            // console.log({...data,blogTag: tags,blogContent: content,addedBy:userInfo?.data?._id});
            // console.log({ ...data, addedBy: userInfo?.data?._id });
            // @ts-ignore
            const response = await createBlog({...data,blogTag: tags,blogContent: content,addedBy:userInfo?.data?._id})
            console.log(response);
            // @ts-ignore
            if (response?.success) {
                message.success('Blog Added')
            }

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='flex justify-center'>
            <div className='w-[50vw] shadow-2xl rounded-lg  p-5 mt-10'>
                {/* <p>this page is to create blog</p> */}
                <Form submitHandler={onSubmit}>
                    <FormInput type="url"
                        name='blogImage'
                        required
                        placeholder='Enter the blog image url'
                        label='Blog Image' />
                    <div className='py-2'>
                        <FormInput type='text'
                            name='blogTitle'
                            required
                            placeholder='Enter the blog title'
                            label='Blog Title' />
                    </div>
                    <p>Blog Content</p>
                    <TextEditor content={content} setContent={setContent} />
                    <div className='py-2'>
                        <DynamicSelect
                            name='tags'
                            mode={"tags"}
                            placeholder="Please select a tags"
                            // @ts-ignore
                            handleChange={onChange}
                            options={
                                tagsData?.data?.map((tag: any) => {
                                    return { value: tag.id, label: tag.tagName, key: tag.tagName }
                                })
                            }
                        />
                    </div>
                    <div className='py-4 flex justify-center'>
                        <Button style={{ background: "blue" }} htmlType="submit"> Create Blog </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default page;