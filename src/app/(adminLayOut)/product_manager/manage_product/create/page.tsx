/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FromInput';
import DynamicTag from '@/components/ui/Tag/Tag';
import { localStorageHelper } from '@/helper/credential';
import { useCreateFAQMutation } from '@/redux/api/faqApi';
import { useCreateServiceMutation } from '@/redux/api/service';

import { Button, Input, message, Select } from 'antd';
import { useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Controller, SubmitHandler, useFormContext,useForm } from 'react-hook-form';

// const { TextArea } = Input;
type IService = {
    addedBy: string,
    "serviceName": string,
    "description": string,
    "features": string[],
    "idealFor": string,
    "price": string,
    "isActive": boolean,
    category:string
}

const serviceCreatePage = () => {
    // !hooks



    // const errorMessage = getErrorMessageByPropertyName(errors, name);

    const [tags, setTags] = useState(['Like this']);
    const [createService, { data }] = useCreateServiceMutation()
    const [category,setCategory]=useState("")
    const handleChange = (value: string) => {
        setCategory(value)
      };
      
    console.log(data);

    // !functions
    const onSubmit: SubmitHandler<IService> = async (data) => {
        try {
            const userInfo = localStorageHelper.getUserInfo()
            // console.log({ ...data, isActive: false, addedBy: userInfo?.data?._id, features: tags });
            // console.log({ userInfo });
            // console.log({ ...data, addedBy: userInfo?.data?._id });
            // @ts-ignore
            const response = await createService({ ...data,category, isActive: false, addedBy: userInfo?.data?._id, features: tags })
            // console.log({ response });
            // @ts-ignore
            if (response.status === 202) {
                message.success('Service Added')
            }

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='flex justify-center h-[100vh]'>
            <div className='shadow-xl rounded-lg p-10 w-[60vw]'>
                <h4 className=' font-semibold text-lg flex justify-center px-4'>Service create page</h4>
                <Form submitHandler={onSubmit}>

                    <FormInput
                        label='Service Name'
                        required
                        size='large'
                        name="serviceName"
                        placeholder="Service Name"
                    />

                    <FormInput
                        required
                        label='Service Price'
                        size="large"
                        name="price"
                        placeholder="Service price write like $1233.00 this"
                    />

                    <div>
                        <p>Service Description</p>
                        <Controller
                            name="description"
                            // control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextArea
                                    required
                                    size='large'
                                    {...field}
                                    placeholder="Enter the description here"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        borderColor: '#ccc',
                                        marginTop: '10px',
                                    }}
                                />
                            )}
                        />
                    </div>
                    {/* <span className="text-red-500">{errors.serviceName?.message}</span> */}
                    <div>
                        <p>Service Ideal For</p>
                        <Controller
                            name="idealFor"
                            // control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextArea
                                    {...field}
                                    size='large'
                                    required
                                    placeholder="Ideal for"
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        borderColor: '#ccc',
                                        marginTop: '10px',
                                    }}
                                />
                            )}
                        />
                    </div>

                    <small className='font-bold text-black'>Feature for the service</small>
                    <br />
                    <DynamicTag tags={tags} setTags={setTags} />

                    <Select
      defaultValue="INTRO"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'INTRO', label: <span>INTRO</span> },
        { value: 'BASE', label: <span>BASE</span> },
        { value: 'POPULAR', label: <span>POPULAR</span> },
        { value: 'ENTERPRISE', label: <span>ENTERPRISE</span> },

    ]}
    />
                    <div className='flex justify-center py-4'>
                        <Button type='primary' htmlType="submit"> Create Service </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default serviceCreatePage;
