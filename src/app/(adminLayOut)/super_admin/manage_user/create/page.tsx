/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FromInput';
import DynamicSelect from '@/components/ui/Form/FromSelect';
import { localStorageHelper } from '@/helper/credential';
import { useUserSignUpMutation } from '@/redux/api/authApi';
import { useGetAllRoleQuery } from '@/redux/api/roleApi';
import { message, Button } from 'antd';
import Link from 'next/link';

import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

type Inputs = {
    email: string
    password: string
}

const page = () => {
    const [userSignup, { data, isLoading }] = useUserSignUpMutation()
    const { data: roles } = useGetAllRoleQuery(undefined)
    const [role, setRole] = useState<string>(data?.data?.Role?.name)
    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        const loginResponse = await userSignup({ ...data, role: role }).unwrap();
        if (loginResponse?.data?.accessToken) {
            message.success('Sign up Success')
        }

    }

    console.log({roles,role})

    const onChange = (value: string) => {
        setRole(value)
    };
    return (
        <div className='flex justify-center h[100vh] items-center'>
            <div className='shadow-2xl rounded-2xl p-10'>
                <p>Add user</p>
                <Form submitHandler={onSubmit}>
                    <div>
                        <FormInput
                            type="email"
                            name='email'
                            placeholder='Email'
                        />
                    </div>

                    <div className="mt-6">
                        {/* <Input.Password placeholder="input password"  /> */}
                        <FormInput
                            type="password"
                            name='password'
                            placeholder='Enter the password'
                        />
                    </div>
                    <div className='py-5'>
                        <p>Select A Role</p>
                    <DynamicSelect
                            name='role'
                        mode={undefined}
                        placeholder="Please select a role"
                        handleChange={onChange}
                        options={
                            roles?.data?.map((role: any) => {
                                return { value: role.id, label: role.name, key: role.name }
                            })
                        }
                    />
                    </div>

                    <div className="mt-6 flex justify-center">
                        <Button type='primary' htmlType="submit">submit</Button>
                    </div>

                </Form>
            </div>
        </div>
    );
};

export default page;