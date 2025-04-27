/* eslint-disable react-hooks/rules-of-hooks */
"use client"

// import FormInput from '@/components/ui/Form/FromInput';
// import { localStorageHelper } from '@/helper/credential';
// import { useCreateRoleMutation } from '@/redux/api/roleApi';
// import { Button, message } from 'antd';
// import React from 'react';

const page = () => {
    // const [createRole] = useCreateRoleMutation()
    // const handleSubmit = async (data: { name: string }) => {
    //     try {
    //         const response = await createRole({ name: data.name })
    //         if (response?.data) {
    //             message.success('Role created successfully')
    //         } else {
    //             message.error('Something went wrong')
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <p>role</p>
            {/* <div className='mx-auto inline-block shadow-2xl p-20 rounded-2xl justify-items-center'>
                <Form submitHandler={handleSubmit}>
                    <FormInput
                        name="name"
                        label="App Role"
                        placeholder="Enter the role"
                        type="text"
                        required={true}
                    />
                    <div className='flex justify-center py-4'>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </div>
                </Form>
            </div> */}
        </div>
    );
};

export default page;