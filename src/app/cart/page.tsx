/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import DynamicTable from '@/components/ui/Table/DynamicTable';
import { localStorageHelper } from '@/helper/credential';
import {  useGetUserCartsQuery } from '@/redux/api/cartApi';
import { Button } from 'antd';
import Link from 'next/link';


const page = () => {
    const userInfo = localStorageHelper.getUserInfo()
    // @ts-ignore
    const { data, isLoading } = useGetUserCartsQuery(userInfo?.data?._id);
    console.log(data);
    const columns = [
        { title: 'id', dataIndex: 'id', key: '1' },
        { title: 'Service', dataIndex: 'name', key: '2' },
        { title: 'Service For', dataIndex: 'idealFor', key: '3' },
        { title: 'Service Price', dataIndex: 'price', key: '4' },
        {
          title: 'Action',
          key: '5',
          dataIndex: 'Operation'
        },
    ]

    let transformedData;
    if (data?.success) { 
         transformedData = data?.data.map((item: { id: string; product: { id:string,serviceName: string; idealFor: string; price: string; }; }) => ({
            key: item.id,
            id: item.id,
            name: item.product.serviceName,
            idealFor: item.product.idealFor,
             price: item.product.price,
             Operation: <Link className="text-lg text-black" href={`/purchase/${item?.product?.id}?cart_id=${item?.id}`}>
                <Button style={{background:"blue"}} type='primary'>Confirm Purchase</Button>
            </Link>
        }));
    }

    return (
        <div className='bg-slate-900'>
             <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent" >
                <Navbar />

                <DynamicTable
                    columns={columns}
                    dataSource={transformedData}
                    isLoading={isLoading} />
                
                <Footer />
            </div>
        </div>
    );
};

export default page;