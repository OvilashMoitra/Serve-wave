/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { BsCheck2All } from "react-icons/bs";
import {BsPlus} from "react-icons/bs";
import DynamicTable from '@/components/ui/Table/DynamicTable';
import { useGetAllUserQuery } from '@/redux/api/authApi';
import { useGetAllFAQQuery } from '@/redux/api/faqApi';
import { Button } from 'antd';

import React from 'react';
import { useGetAllOrdersQuery, useUpdateOrderMutation } from "@/redux/api/orderApi";

// fetch the data and mutate it make column
const columns = [
  { title: 'Customer Name', dataIndex: 'Customer Name', key: '1' },
  { title: 'Buying Service', dataIndex: 'Buying Service', key: '2' },
    { title: 'Status', dataIndex: 'Status', key: '3' },
  {
    title: 'Action',
    key: '4',
    dataIndex: 'Operation'
  },
]


const page = () => {

    const { data, isLoading } = useGetAllOrdersQuery(undefined);
    const [updateOrder, {isLoading:isUpdating}]=useUpdateOrderMutation()
    // console.log({data})

    const columnData = data?.data?.map((elem: { id: any; customer: { email: string }; service:{serviceName:string}; status: string; }) => {
    return {
      key: elem?.id,
      'Customer Name': elem?.customer.email,
      'Buying Service': elem?.id,
      Status: elem?.status,
        Operation: <Button
            onClick={()=>updateOrder({id:elem?.id,data:{status:"COMPLETED"}})}
            style={{ background: "green", color: "white" }} type="primary" className="mr-2">
          <BsCheck2All  />
        </Button>,
    };
    }) ?? [];
    
    console.log({columnData})

    return (
        <div>
            
        <DynamicTable
          isLoading={isLoading}
          columns={columns}
          dataSource={columnData}
            />
        </div>
    );
};

export default page;