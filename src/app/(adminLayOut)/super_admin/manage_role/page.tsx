/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import {PiPencilSimpleLineBold} from "react-icons/pi";
import {BsPlus} from "react-icons/bs";
import DynamicTable from '@/components/ui/Table/DynamicTable';
import { useGetAllUserQuery } from '@/redux/api/authApi';
import { useGetAllFAQQuery } from '@/redux/api/faqApi';
import React from 'react';
import { useGetAllRoleQuery } from "@/redux/api/roleApi";

// fetch the data and mutate it make column
const columns = [
  { title: 'id', dataIndex: 'id', key: '1' },
  { title: 'Role', dataIndex: 'name', key: '2' },
  // {
  //   title: 'Action',
  //   key: '3',
  //   dataIndex: 'Operation'
  // },
]


const page = () => {

  const { data, isLoading } = useGetAllRoleQuery(undefined);

  const columnData = data?.data?.map((elem: { id: string; name: string; }) => {
    return {
      key: elem?.id,
      id: elem?.id,
      name: elem?.name,
      // Operation: <Link className="text-lg text-black" href={`/super_admin/manage_role/${elem?.id}`}>
      //   <Button type="primary" className="mr-2">
      //     <PiPencilSimpleLineBold />
      //   </Button>
      // </Link>,
    };
  }) ?? [];

    return (
        <div>
            <div className='flex justify-end p-10'>
              {/* <Button
                    type="primary"
                    className='my-5'
               >
                <Link href={'/super_admin/manage_role/create'}>Create <BsPlus className="inline text-base"/></Link>
              </Button> */}
            </div>
        <DynamicTable
          isLoading={isLoading}
          columns={columns}
          dataSource={columnData}
        />
        <small className=" text-red-400 font-bold">Roles are predefined can not be updated or create at this moment</small>
        </div>
    );
};

export default page;