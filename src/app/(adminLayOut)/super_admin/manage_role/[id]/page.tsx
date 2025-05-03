// /* eslint-disable react-hooks/rules-of-hooks */
// "use client"

// import DynamicSelect from '@/components/ui/Form/FromSelect';
// import { useGetUserQuery, useUpdateUserMutation } from '@/redux/api/authApi';
// import { useGetAllRoleQuery } from '@/redux/api/roleApi';
// import {  Spin, message } from 'antd';
// import React, { useEffect, useState } from 'react';
// import { Controller } from 'react-hook-form';
// const page = ({ params }: { params: { id: string } }) => {
//     //! hooks
//     const { data, isLoading } = useGetUserQuery(params.id, { skip: !params.id })
//     const [role, setRole] = useState<string>(data?.data?.Role?.name)
//     const { data: roles, isLoading: isRoleLoading } = useGetAllRoleQuery(undefined)
//     const [updateUser, { data: updatedUser, isLoading: isUpdateLoading }] = useUpdateUserMutation()



//     // !functions
//     const onChange = (value: string) => {
//         setRole(value)
//     };

//     const onSubmit = async () => {

//         const updateResponse = await updateUser({ "role": role, id: params.id })

//         message.success('Update Success')
//     };


//     //! content
//     let conetent;
//     if (isLoading || isRoleLoading || isUpdateLoading) {
//         conetent = <div className='flex mx-auto items-center'>
//             <Spin />
//         </div>
//     } else if (data && roles && !isLoading && !isRoleLoading) {
//         conetent = <div>
//             <p>this page is to update user role</p>
//             <p>update {data?.data?.email} user Role</p>
//             <DynamicSelect
//                 name='role'
//                 mode={undefined}
//                 placeholder="Please select a role"
//                 handleChange={onChange}
//                 options={
//                     roles?.data?.map((role: any) => {
//                         return { value: role.id, label: role.name, key: role.name }
//                     })
//                 }
//             />
//         </div>
//     }

//     return (
//         <>
//             {/* <Form submitHandler={onSubmit}>
//                 {conetent}
//                 <div className="mt-6 flex justify-center">
//                     <Button type='primary' htmlType="submit">submit</Button>
//                 </div>

//             </Form> */}
//            <p>this page is to update the current role</p>
//         </>
//     );
// };

// export default page;