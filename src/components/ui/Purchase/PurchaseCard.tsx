/* eslint-disable @next/next/no-img-element */
"use client"
import { useGetServiceQuery } from '@/redux/api/service';
import { Button, TabsProps, message } from 'antd';
import React, { useRef, useState } from 'react';
import PurchaseDetails from './PurchaseDetails';
import ReviewSection from '../Review/ReviewSection';
import DynamicTabs from '../Tabs/Tabs';
import DynamicModal from '../Modal/Modal';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useCreateOrderMutation } from '@/redux/api/orderApi';
import { localStorageHelper } from '@/helper/credential';
import { useRouter } from 'next/navigation';
import { useGetReviewByIdQuery } from '@/redux/api/reviewApi';


const onChange = (key: string) => {
    console.log(key);
};

export type IReview = {
    comments:string
    createdAt:Date
    id:string
    orderId:string
    rating:number
    serviceId:string
    updatedAt:Date
}






const PurchaseCard = ({ id,cart_id }: { id: string,cart_id:string}) => {
    // !hook
    const router=useRouter()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { data, isLoading } = useGetServiceQuery(id, { skip: !id })
    const {data:Reviews}=useGetReviewByIdQuery(id)
    const [addToPurchase,{isSuccess}]=useCreateOrderMutation()
    const { control, handleSubmit, formState: { errors } } = useForm();
    const purchaseFormRef=useRef<HTMLButtonElement|null>(null)
    // console.log({ data });


    // ! tab  data
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Description',
            children: <p className='text-white font-bold'>{data?.data?.description}</p>,
        },
        {
            key: '2',
            label: 'Review',
            children: <div>
                {Reviews?.data?.map((review:IReview)=><ReviewSection key={review.id} review={review}/>)}
            </div>,
        },
        {
            key: '3',
            label: 'Details',
            children: <PurchaseDetails serviceName={data?.data} />,
        },
    ];

// !userInfo
    const userInfo = localStorageHelper.getUserInfo();
    console.log(userInfo);
    
    // ! modal function

    const showModal = () => {
        setIsOpen(true);
    };

    const handleOk = () => {
        purchaseFormRef.current?.click()
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    // ! form function


    const onSubmit:any = async(inputField:{mobileNumber:string}) => {
        // @ts-ignore
        const orderResponse = await addToPurchase({
            ...inputField,
            serviceId: data?.data?.id,
            cart_id:cart_id,
            customerId: userInfo?.data?._id
        })
        console.log(orderResponse);
        setIsOpen(false);
        // @ts-ignore
        if (orderResponse?.data.success) {
            message.success('Order Created Successfully');
            router.push('/order')
        } else {
            message.error('Something went wrong');
        }
    };
    return (
        <>
            <section className="body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap flex-col text-white shadow-2xl border-2 border-[rgb(51 56 65)] p-10 rounded-lg">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-lg title-font text-white tracking-widest">Serve wave</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-4">{data?.data?.serviceName}</h1>
                            <div className="flex mb-4 text-white">
                                <DynamicTabs items={items} onChange={onChange} />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <Button size="middle"
                                onClick={() => showModal()}
                                style={{ background: "blue" }} type='primary'>
                                Confirm Purchase</Button>
                        </div>
                    </div>
                </div>
                <DynamicModal
                    title='Enter Phone Number'
                    open={isOpen}
                    onCancel={handleCancel}
                    onOk={handleOk}
                    okText='Purchase'
                >
                    {/* //@ts-ignore */}
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ margin: '1rem' }}>
                            <label htmlFor="phoneNumber">Enter your Phone Number:</label>
                            <Controller
                                name="phoneNumber"
                                control={control}
                                rules={{ required: 'Mobile Number is required' }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        required
                                        id="phoneNumber"
                                        style={{
                                            padding: '0.5rem',
                                            fontSize: '1rem',
                                            borderRadius: '5px',
                                            border: '1px solid #ccc',
                                            width: '100%',
                                            background: '#f1f1f1',
                                        }}
                                    />
                                )}
                            />
                            {/* @ts-ignore */}
                            {errors.inputField && <p style={{ color: 'red' }}>{errors?.inputField?.message}</p>}
                        </div>
                        <div className='hidden'>
                            <Button ref={purchaseFormRef} style={{ background: 'blue', color: "white" }} htmlType='submit'>Submit</Button>
                        </div>
                    </form>
                </DynamicModal>
            </section>
        </>
    );
};

export default PurchaseCard;