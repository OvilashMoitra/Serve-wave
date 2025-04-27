/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { BsPlus } from "react-icons/bs";
import DynamicTable from '@/components/ui/Table/DynamicTable';
import { useGetAllUserQuery } from '@/redux/api/authApi';
import { useGetAllFAQQuery } from '@/redux/api/faqApi';
import { Button } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import { useDeleteServiceMutation, useGetAllServiceQuery } from "@/redux/api/service";
import DynamicModal from "@/components/ui/Modal/Modal";

// fetch the data and mutate it make column
const columns = [
  { title: 'Name', dataIndex: 'Name', key: '1' },
  { title: 'Id', dataIndex: 'key', key: '2' },
  { title: 'Description', dataIndex: 'Description', key: '3' },
  { title: 'Price', dataIndex: 'Price', key: '4' },
  {
    title: 'Action',
    key: '5',
    dataIndex: 'Operation'
  },
]

interface IService {
  id: string;
  addedBy: string;
  serviceName: string;
  description: string;
  features: string[];
  idealFor: string;
  price: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  auth: {
    email: string;
    id: string;
  };
}


const page = () => {
  // ! hook
  const [isOpen, setIsOpen] = useState(false)
  const [deleteService]=useDeleteServiceMutation()
  const [serviceName, setServiceName] = useState<IService>({
    id: '',
        addedBy: '',
        serviceName: '',
        description: '',
        features: [],
        idealFor: '',
        price: '',
        isActive: false,
        createdAt: '',
        updatedAt: '',
        auth: {
          email: '',
          id: ''
        }
  })
  const { data, isLoading } = useGetAllServiceQuery(undefined);
  // console.log(data);

  // ! modal content
  let modalContent;
  if (Object.keys(serviceName).length > 0) {
    modalContent = <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    {/* <img className="w-full h-32 object-cover object-center" src="IMAGE_URL_HERE" alt="Service Image"> */}
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{serviceName?.serviceName}</h2>
      <p className="text-gray-600 mb-4">{serviceName?.description}</p>
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-green-500 font-semibold">$ {serviceName?.price}</span>
        <span className="text-gray-500">Ideal for: {serviceName?.idealFor}</span>
      </div>
      <ul className="space-y-2">
        {
          serviceName?.features?.map((feature) => {
            return <li key={feature} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.293 9.293a1 1 0 011.414 1.414L9 13.414l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" />
              </svg>
              {feature}
            </li>
          })
        }
      </ul>
    </div>
  </div>
  }
  

  // ! modal function

  const showModal = (service: IService) => {
    setServiceName(service)
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  // ! column data
  const columnData = data?.data?.map((elem: { id: string, price: string, serviceName: string, description: string }) => {
    return {
      key: elem?.id,
      Name: elem?.serviceName,
      Description: elem?.description,
      Price: elem?.price,
      Operation: <>
        {/* <Link className="text-lg text-black" href={`/product_manager/manage_product/${elem?.id}`}> */}
          <Button onClick={()=>deleteService(elem?.id)} style={{background:"red",color:"white"}} type="primary" className="mr-2">
           Delete
          </Button>
        {/* </Link> */}
        <Button style={{background:"blue",color:"white"}} type="primary" onClick={() => showModal(elem as IService)}>
          Details Service
        </Button>
      </>
    };
  }) ?? [];

  // console.log("serviceName after modal open", {serviceName});

  return (
    <div>
      <div className='flex justify-end p-10'>
        <Button
          style={{background:"blue",color:"white"}}
          type="primary"
          className='my-5'
        >
          <Link href={'/product_manager/manage_product/create'}>Create <BsPlus className="inline text-base" /></Link>
        </Button>
      </div>
      <DynamicTable
        isLoading={isLoading}
        columns={columns}
        dataSource={columnData}
      />

      <DynamicModal
        title="Service Details"
        okText="Ok"
        open={isOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        {/* //@ts-ignore */}
        {Object.keys(serviceName).length > 0 ? <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* <img className="w-full h-32 object-cover object-center" src="IMAGE_URL_HERE" alt="Service Image"> */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{serviceName.serviceName}</h2>
            <p className="text-gray-600 mb-4">{serviceName?.description ? serviceName?.description:null}</p>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-green-500 font-semibold">$ {!!serviceName?.price}</span>
              <span className="text-gray-500">Ideal for: {serviceName?.idealFor}</span>
            </div>
            <ul className="space-y-2">
              {
                serviceName?.features?.map((feature) => {
                  return <li key={feature} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.293 9.293a1 1 0 011.414 1.414L9 13.414l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" />
                    </svg>
                    {feature}
                  </li>
                })
              }
            </ul>
          </div>
        </div> : <p>Error getting the service</p>}


      </DynamicModal>
    </div>
  );
};

export default page;