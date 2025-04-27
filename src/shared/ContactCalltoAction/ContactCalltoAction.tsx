/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'
import { FcCallback } from 'react-icons/fc'
import { FcCalendar } from 'react-icons/fc'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import styles from './ContactCalltoAction.module.css'
import { Button, Card, Drawer, message } from 'antd'
import { useCreateContactMutation } from '@/redux/api/contactApi'
const ContactCalltoAction = () => {

  // !hook
  const [addToContact]=useCreateContactMutation()

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  //! state management
  const [open, setOpen] = useState(false);
  const [isStartOpenClicked, setIsStartOpenClicked] = useState(false)

  // ! drawer functionality
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  //!! post contact info to database

  const onSubmit =async (data:unknown) => {
    console.log(data);
    const contactResponse = await addToContact(data)
    // @ts-ignore
    message.success('Got your response.')
  };




  // drawer content
  let drawerContent;
  // when isStartOpenClicked is false
  if (isStartOpenClicked === false) {
    drawerContent = <div className="text-black">
      <p className='text-2xl font-extrabold'>What are you waiting for?</p>
      <p className='text-xl text-primary font-extrabold'>Lets talk</p>
      {/* Phone Number */}
      {/* <div className="divider"></div> */}
      <div >
        <Card hoverable={true} style={{margin:"10px 0"}}>
          <div className='rounded-xl flex items-center cursor-pointer '>
            <div className=' rounded-lg '>
              <FcCallback className='inline-block w-10' />
            </div>
            <div className='flex flex-col ml-5'>
              <p className='font-bold'>Phone Number</p>
              {/* //! <a className='text-black font-extrabold' href={`tel:+${import.meta.env.VITE_APP_PHONE_NUMBER}`}>{import.meta.env.VITE_APP_PHONE_NUMBER}</a> */}
            </div>
          </div>
        </Card>
      </div>
      {/* Email */}
      {/* <div className="divider"></div> */}
      <Card hoverable={true} style={{margin:"10px 0"}}>
        <div >
          <div className='rounded-xl flex items-center cursor-pointer '>
            <div className='my-2 rounded-lg'>
              <img className='w-10 block' src="https://i.ibb.co.com/MCwb0Rj/email-image.jpg" alt="" />
            </div>
            <div className='flex flex-col ml-5'>
              <p className='font-bold'>Email</p>
              {/*//!<a className='text-black font-extrabold' href={`mailto:${import.meta.env.VITE_APP_EMAIL}`}>{import.meta.env.VITE_APP_EMAIL}</a> */}
            </div>
          </div>
        </div>
      </Card>
      {/* whats app */}
      {/* <div className="divider"></div> */}
      <Card hoverable={true} style={{margin:"10px 0"}}>
        <div >
          <div className='rounded-xl flex items-center w-full cursor-pointer '>
            <div className='my-2 rounded-lg'>
              <img className='w-10 block' src="https://i.ibb.co.com/0mKbwDm/whatss-app-image.jpg" alt="" />
            </div>
            <div className='flex flex-col ml-5'>
              <p className='block font-bold'>Whats App</p>
              {/*//! <p className='font-extrabold'>{import.meta.env.VITE_APP_PHONE_NUMBER}</p> */}
            </div>
          </div>
        </div>
      </Card>
      {/* <div className="divider"></div> */}
      {/* callender link */}
      <Card hoverable={true} style={{margin:"10px 0"}}>
        <div>
          <div className=' flex items-center cursor-pointer '>
            <div className='my-2 rounded-lg'>
              <FcCalendar className='w-10 h-10' />
              {/* <img className='w-10 block' src="https://i.ibb.co/ZTwLRxx/whatsapp-design-template-a62f0bf703ae0061d9754c93653c510a-screen.jpg" alt="" /> */}
            </div>
            <div className='flex flex-col ml-5'>
              <a href='https://calendly.com/themarketingkit/get-a-free-consultancy' target="_blank" className='font-extrabold text-lg text-black'>Schedule a call <FaLongArrowAltRight className='inline-block' /></a>
            </div>
          </div>
        </div>
      </Card>
      {/* <div className="divider"></div> */}
      {/* Start a project*/}
      <Card hoverable={true} style={{margin:"10px 0"}}>
        < >
          <div onClick={() => setIsStartOpenClicked(elem => !elem)} className=' flex items-center cursor-pointer '>
            <div className='my-2 rounded-lg'>
              {/* <FcCalendar className='w-10 h-10' /> */}
              <img className='w-10 block' src="https://i.ibb.co.com/stnQJFh/project-image.png" alt="" />
            </div>
            <div className='flex flex-col ml-5'>
              <a className='font-extrabold text-lg text-black'>Start a project <FaLongArrowAltRight className='inline-block' /></a>
            </div>
          </div>
        </>
      </Card>
    </div>
  }
  // when isStartOpenClicked is true
  if (isStartOpenClicked === true) {
    drawerContent = <div className="text-black">
      {/* <!-- Sidebar content here --> */}
      <button onClick={() => setIsStartOpenClicked(elem => !elem)} className='text-blue-400 font-bold btn-ghost text-left'><FaLongArrowAltLeft className='text-blue-400 font-bold inline-block' />Back</button>
      <h3 className='font-extrabold text-2xl'>Need a digital product or a custom solution? We’re all ears!</h3>
      <p>It usually takes us up to 6 hours to get back to you.</p>
      <form className='mx-auto w-[95%]' onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input type="text" placeholder="Type here"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
            className="py-2 rounded-2xl text-black border border-black bg-white shadow-2xl w-full max-w-xs" />
          {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Name is required</p>}
        </div>
        {/* email */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your email</span>
          </label>
          <input type="email" placeholder="Type here"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
            className="py-2 rounded-2xl text-black border border-black bg-white shadow-2xl w-full max-w-xs" />
          {errors.email?.type === 'required' && <p role="alert" className='text-red-500'>Email is required</p>}
        </div>
        {/* Message */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Your message"
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            className="py-2 rounded-2xl text-black border border-black bg-white shadow-2xl w-full max-w-xs"  ></textarea>
          {errors.message?.type === 'required' && <p role="alert" className='text-red-500'>Message is required</p>}
        </div>
        {/* Phone Number */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type={'tel'} placeholder="Your phone number"
            {...register("phoneNumber",{required: "Phone number is required"})}
            className="py-2 rounded-2xl text-black border border-black bg-white shadow-2xl w-full max-w-xs" />
          {errors.phoneNumber?.type === 'required' && <p role="alert" className='text-red-500'>Phone Number is required</p>}
        </div>
        {/* submission button */}
        <div className='flex py-2 justify-center'>
        <Button style={{background:"blue",color:'white'}} htmlType="submit">
          Submit
        </Button>
       </div>
      </form>
    </div>
  }
  return (
    <div className=' text-black'>
      <Button
        // write a css to show the button in the right most corner and middle height
        
        style={{
          position: 'fixed',
          top: "50%",
          right: "0px",/* Adjust the distance from the right side */
          backgroundColor: "blue",
          transform:" translateY(-50%) rotate(-90deg)"
        }}
        type="primary" onClick={showDrawer}>
        Talk
      </Button>
      <Drawer title="Contact Us" placement="right" onClose={onClose} open={open}>
      {/* <div className="drawer drawer-end"> */}
        {/* <input id="my-drawer-4" type="checkbox" className="drawer-toggle" /> */}
        {/* <div className="drawer-content"> */}
          {/* <!-- Page content here --> */}
          {/* {children} */}
          {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary fixed top-[50vh] left-[75%]">Open drawer</label> */}
        {/* </div> */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <div className="menu p-4 bg-base-100 text-base-content callAction">
            {drawerContent}
          </div>
        {/* </div> */}
        </div>
        </Drawer>
    </div>
  )
}

export default ContactCalltoAction