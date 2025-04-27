/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import {PiPencilSimpleLineBold} from "react-icons/pi";
import {BsPlus} from "react-icons/bs";
import DynamicTable from '@/components/ui/Table/DynamicTable';
import { useGetAllUserQuery } from '@/redux/api/authApi';
import { Button, Tag } from 'antd';
import Link from 'next/link';
import React from 'react';
import { FaBan } from "react-icons/fa";
import { useBanUserMutation, useUnBanUserMutation } from "@/redux/api/userApi";
import { FcOk } from "react-icons/fc";


// fetch the data and mutate it make column
const columns = [
  { title: 'Email', dataIndex: 'Email', key: '1' },
  { title: 'Id', dataIndex: 'key', key: '2' },
    { title: 'Tag', dataIndex: 'Tag', key: '3' },
  {
    title: 'Action',
    key: '4',
    dataIndex: 'Operation'
  },
]


const page = () => {

  const { data, isLoading } = useGetAllUserQuery(undefined);
  const [banUser] = useBanUserMutation()
  
  const [unBan]=useUnBanUserMutation()
  
  console.log(data?.data)

    // ! ban unban action button
    const banUnbanSection = (elem) => {
      const action = <div>
        {elem?.isBanned===true ?  <Button onClick={()=>unBan({data:{userId:elem?.id}})} style={{ background: "green", color: "white" }} type="primary" className="mr-2">
             < FcOk/>
           </Button> : 
              <Button onClick={()=>banUser({data:{userId:elem?.id}})} style={{ background: "red", color: "white" }} type="primary" className="mr-2">
                <FaBan />
              </Button>
            }
      </div>
      return action
    }

  const columnData = data?.data?.map((elem: { id: any; isBanned: boolean; email: any; Role: { name: any; }; }) => {
    return {
      key: elem?.id,
      Email: elem?.email,
      Tag: <div>
        <Tag color="blue">
         {elem?.Role?.name}
        </Tag>
        <Tag>
          {elem?.isBanned===true?<Tag color="red">Banned</Tag>:null}
        </Tag>
      </div>,
      Operation: <div>
        <Link className="text-lg text-black" href={`/super_admin/manage_user/${elem?.id}`}>
        {
          elem?.Role?.name === "SUPER_ADMIN" ? null : (
            <Button style={{ background: "blue", color: "white" }} type="primary" className="mr-2">
              <PiPencilSimpleLineBold />
            </Button>
          )
        }
        </Link>
        {
          elem?.Role.name!=="SUPER_ADMIN"? banUnbanSection(elem):null
            
        }
      </div>,
    };
  }) ?? [];




    return (
        <div>
            <div className='flex justify-end p-10'>
          <Button
            style={{ background:"blue",color:"white" }}
                    type="primary"
                    className='my-5'
               >
                <Link href={'/super_admin/manage_user/create'}>Create <BsPlus className="inline text-base"/></Link>
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