/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import DynamicTable from '@/components/ui/Table/DynamicTable';
import { useGetAllFAQQuery } from '@/redux/api/faqApi';
import { Button } from 'antd';
import Link from 'next/link';


// fetch the data and mutate it make column
const columns = [
  { title: 'Question', dataIndex: 'Question', key: '1' },
  { title: 'Answer', dataIndex: 'Answer', key: '2' },
    { title: 'Created By', dataIndex: 'created By', key: '3' },
  {
    title: 'Action',
    key: '4',
    dataIndex: 'Operation'
  },
]


const page = () => {
  const { data, isLoading } = useGetAllFAQQuery(undefined);
  // console.log(data?.data);
  const columnData = data?.data?.map((elem: { id: string; question: string; answer: string }) => {
    return {
      key: elem?.id,
      Question: elem?.question,
      Answer: elem?.answer,
      Operation: <Link href={`/content_manager/faq/${elem?.id}`}>Update</Link>,
    };
  }) ?? [];
  console.log({ columnData });
    return (
        <div>
            <div className='flex justify-end p-10'>
              <Button
                    type="primary"
                    className='my-5'
               >
                <Link href={'/content_manager/faq/create'}>Create</Link>
              </Button>
            </div>
        <DynamicTable
          isLoading={isLoading}
          columns={columns}
          dataSource={columnData}
            />
        </div>
    );
};

export default page;