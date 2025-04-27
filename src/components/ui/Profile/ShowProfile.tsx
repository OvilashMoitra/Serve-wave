"use client"
// @ts-ignore
import { localStorageHelper } from '@/helper/credential'
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from '@/redux/api/userApi'
import { Button, DatePicker } from 'antd'
import { useState } from 'react'
import {  AiTwotoneEdit } from 'react-icons/ai'

const ProfileView = () => {
    //! hook
    const userInfo = localStorageHelper.getUserInfo()
    // @ts-ignore
    const { data: userProfile } = useGetUserProfileQuery(userInfo?.data?._id, { skip: userInfo?.data?._id ? false : true })

    const [updateUser] = useUpdateUserProfileMutation()
    // !update user 
    const [isEditProfile, setIsEditProfile] = useState(false);
    const [name, setName] = useState(userProfile?.data?.userName || '');
    const [phoneNumber, setPhoneNumber] = useState(userProfile?.data?.phoneNumber || '');
    const [dateOfBirth, setDateOfBirth] = useState(userProfile?.data?.dateOfBirth || '');
    const [linkedIn, setLinkedIn] = useState(userProfile?.data?.linkedIn || '');

    console.log({ userProfile });
    // const [isEditProfile, setIsEditProfile] = useState(false)
    const [isEditBio, setIsEditBio] = useState(false)

    const handleSaveProfile = async () => {
        try {
            const updateUserResponse = await updateUser({
                // @ts-ignore
                id: userInfo?.data?._id,
                data: {
                    userName: name,
                    phoneNumber,
                    dateOfBirth,
                    linkedIn,
                },
            });
            console.log({ updateUserResponse });
            setIsEditProfile(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    // ! date picker
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date:any, dateString:any) => {
        // Handle the selected date here
        console.log({ date, dateString });
        const dateUpdated = new Date(dateString)
        console.log(dateUpdated);
        // setSelectedDate(dateString);
        setDateOfBirth(dateUpdated);
    };

    console.log("selected date: " + selectedDate);

    return (
        <div className='flex shadow-2xl justify-center items-center p-5'>

            <div>
                {!isEditProfile ? <div className="w-[50vw] shadow-2xl form-control border-2 border-white border-solid rounded-lg md:p-10 py-4 px-2 mx-auto my-5 p-20 ">
                    {/* edit button */}
                    <div
                        onClick={() => setIsEditProfile(!isEditProfile)}
                        className='text-end'>
                        <button
                        >
                            <Button style={{background:"blue",color:"white"}} >
                                <AiTwotoneEdit className="inline-block"/>
                                Update Profile
                            </Button>
                        </button>
                    </div>
                    {/* user information */}
                    <label className="flex md:flex-row flex-col input-group input-group-md my-2 p-5 border-2 border-solid border-b-gray-400 w-[100%] rounded-xl">
                        <span className='inline-block md:w-[20%] w-full'>Name</span>
                        <p className='mx-2'>{userProfile?.data?.userName ? userProfile?.data?.userName : "N/A"}</p>
                    </label>
                    <label className="flex md:flex-row flex-col input-group input-group-md my-2 p-5 border-2 border-solid border-b-gray-400 w-[100%] rounded-xl">
                        <span className='inline-block md:w-[20%] w-full'>Phone Number</span>
                        <p>{userProfile?.data?.phoneNumber ? userProfile?.data?.phoneNumber : 'N/A'}</p>
                    </label>
                    <label className="flex md:flex-row flex-col input-group input-group-md my-2 p-5 border-2 border-solid border-b-gray-400 w-[100%] rounded-xl">
                        <span className='inline-block md:w-[20%] w-full'>Email</span>
                        <p className='mx-2 text-white'>{userProfile?.data?.auth?.email}</p>
                    </label>
                    <label className="flex md:flex-row flex-col input-group input-group-md my-2 p-5 border-2 border-solid border-b-gray-400 w-[100%] rounded-xl">
                        <span className='inline-block md:w-[20%] w-full'>Date of Birth</span>
                        <p>{userProfile?.data?.dateOfBirth ? userProfile?.data?.dateOfBirth : 'N/A'}</p>
                    </label>

                    <label className="flex md:flex-row flex-col input-group input-group-md my-2 p-5 border-2 border-solid border-b-gray-400 w-[100%] rounded-xl">
                        <span className='inline-block md:w-[20%] w-full'>LinkedIn</span>
                        <p>{userProfile?.data?.linkedIn
                            ? userProfile?.data?.linkedIn
                            : 'N/A'}</p>
                    </label>

                </div> : <div className='w-[50vw] shadow-2xl form-control border-2 border-white border-solid rounded-lg md:p-10 py-4 px-2 mx-auto my-5 p-20 '>
                    {/* ... */}
                    {/* Editable input fields */}
                    <label className='flex md:flex-row flex-col input-group input-group-md my-2 p-5 border-2 border-solid border-b-gray-400 w-[100%] rounded-xl'>
                        <span className='inline-block md:w-[20%] w-full'>Name</span>
                        <input type='text' defaultValue={userProfile?.data?.userName} value={name} onChange={(e) => setName(e.target.value)} className='mx-2 p-1 rounded-md border border-gray-300' />
                    </label>
                    <label className='flex md:flex-row flex-col input-group input-group-md my-2 p-5 border-2 border-solid border-b-gray-400 w-[100%] rounded-xl'>
                        <span className='inline-block md:w-[20%] w-full'>Phone Number</span>
                        <input type='text' defaultValue={userProfile?.data?.phoneNumber} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='mx-2 p-1 rounded-md border border-gray-300' />
                    </label>
                    <label className='flex md:flex-row flex-col input-group input-group-md my-2 p-5 border-2 border-solid border-b-gray-400 w-[100%] rounded-xl'>
                        <span className='inline-block md:w-[20%] w-full'>LinkedIn Profile</span>
                        <input type='text' defaultValue={userProfile?.data?.linkedIn} value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} className='mx-2 p-1 rounded-md border border-gray-300' />
                    </label>
                    <label className='flex md:flex-row flex-col input-group input-group-md my-2 p-5 border-2 border-solid border-b-gray-400 w-[100%] rounded-xl'>
                        <span className='inline-block md:w-[20%] w-full'>Date of Birth</span>
                        <DatePicker onChange={handleDateChange} />
                        {selectedDate && <p>Selected Date: {selectedDate}</p>}

                    </label>
                    {/* Add similar input fields for other profile information (date of birth, LinkedIn, etc.) */}
                    {/* Save button */}
                    <div className='flex justify-center'>
                        <Button size='large' style={{ background: "blue" }} onClick={handleSaveProfile}>
                            <p>
                                Save
                            </p>
                        </Button>
                    </div>
                </div>}
            </div>
        </div>

    )
}

export default ProfileView