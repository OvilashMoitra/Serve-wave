/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import DynamicModal from '@/components/ui/Modal/Modal';
import DynamicTable from '@/components/ui/Table/DynamicTable';
import { useDeleteContactMutation, useGetAllContactsQuery, useUpdateContactMutation } from '@/redux/api/contactApi';
import { Button, Tag, message } from 'antd';
import { useState } from 'react';


const columns = [
    { title: 'Name', dataIndex: 'name', key: '1' },
    { title: 'Email', dataIndex: 'email', key: '2' },
    {
        title: 'Message',
        dataIndex: 'message',
        key: '3',
    },
    {
        title: 'Status',
        dataIndex: 'contactStatus',
        key: '4',
    },
    {
        title: 'Action',
        key: '5',
        dataIndex: 'Operation'
    },
];

const ContactPage = () => {
    const [text,setText]=useState<string>("")
    const { data, isLoading } = useGetAllContactsQuery(undefined);
    const [updateContact] = useUpdateContactMutation()
    const [deleteContact] = useDeleteContactMutation()
    const [isOpen, setIsOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)

    const [contactId, setContactId] = useState<string>("")

    const columnData = data?.data?.map((contact: { name: string;contactStatus:string, message: string; email: string; phoneNumber: string; id: string; }) => {
    return {
      name: contact?.name,
        email: contact?.email,
        contactStatus: <p>{contact?.contactStatus==="PENDING" ? <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-yellow-500 rounded-full">
          Pending
        </span>: <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
          Completed
        </span>
        }</p>,
      phoneNumber: contact?.phoneNumber,
      message: contact?.message,
        Operation: <>
            {contact?.contactStatus === "PENDING" ? <Button onClick={() => showModal(contact?.id)} style={{ background: "blue" }} type='primary' className="ml-2">Update</Button> : <Button onClick={() => showDeleteModal(contact?.id)} style={{ background: "red" }} type="primary" className="ml-2">Delete</Button>}
        </>,
    };
  }) ?? [];

    // ! modal function
  const showModal = (payload: string) => {
    setContactId(payload)
    setIsOpen(true);
  };
    
  const showDeleteModal = (payload: string) => {
    setContactId(payload)
    setIsDeleteOpen(true);
};

    const handleOk = async () => {
    setIsDeleteOpen(false);
    if (contactId.length === 0) {
        message.error("Please fill every value")
        return
    }
    if (text.length === 0 || text !== 'CONFIRM') { 
        message.error("Please confirm your message")
        return
    }
    const contactPayload = {
        contactStatus: "COMPLETED",
    }

    console.log({ id: contactId, contact: contactPayload });

    const contactResponse = await updateContact({ id: contactId, contact: contactPayload })
    console.log({ contactResponse });
    // if (reviewResponse.status === "COMPLETED") { 

    // }
    setIsOpen(false);
    };
    
    const handleDeleteOk = async () => {
        setIsOpen(false);
        if (contactId.length === 0) {
            message.error("Please fill every value")
            return
        }
        if (text.length === 0 || text !== 'CONFIRM') { 
            message.error("Please confirm your message")
            return
        }
    
        const contactDeleteResponse = await deleteContact(contactId)
        console.log({ contactDeleteResponse });
        // if (reviewResponse.status === "COMPLETED") { 
    
        // }
        setIsDeleteOpen(false);
    };

const handleCancel = () => {
    setIsOpen(false);
    setIsDeleteOpen(false)
};

  return (
    <div>
      <div className='flex justify-end p-10'>
        {/* <Button type="primary" className='my-5'>
          <Link href={'/content_manager/contacts/create'}>Create</Link>
        </Button> */}
      </div>
      <DynamicTable
        columns={columns}
        dataSource={columnData}
        isLoading={isLoading}
          />
          
      <DynamicModal
        title='Update Contact'
              okText='Update'
              open={isOpen}
              onCancel={handleCancel}
              onOk={handleOk}
          >
              <p>Are you sure you want to mark this contact as completed?</p>
              <input type="text" placeholder='CONFIRM' value={text} onChange={e => setText(e.target.value)} />
              <small>Type CONFIRM</small>
          </DynamicModal>
      <DynamicModal
        okText='Delete'
        title='Delete Contact'
              open={isDeleteOpen}
              onCancel={handleCancel}
              onOk={handleDeleteOk}
          >
              <p>Are you sure you want to delete this contact?</p>
              <input className='p-2 bg-white shadow-lg rounded-lg' type="text" placeholder='CONFIRM' value={text} onChange={e => setText(e.target.value)} />
              <br />
              <small>Type CONFIRM</small>
          </DynamicModal>
    </div>
  );
};

export default ContactPage;
