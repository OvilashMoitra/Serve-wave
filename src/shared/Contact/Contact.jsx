/* eslint-disable @next/next/no-img-element */
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FcCallback } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';
import { axiosInstance } from '../../../utils/axios/axiosInstance';
import { v4 } from 'uuid';
import { message } from 'antd';

const Contact = () => {

  const postContact = async (newContact) => {
    return axiosInstance.post('contact/postContact', newContact)
      .then(response => {
        message.success('Got your response.')
        reset()
      })
      .catch(err => toast.error(err))
  }


  // react-query
  const { data, error } = useMutation(postContact)
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {

    postContact({ _id: v4(), ...data })
  };
  return (
    <div className='w-[90vw] shadow-2xl mx-auto rounded-xl'>
      <span className='w-[90vw] bg-[#F9BC6E] h-[5px] mx-auto block rounded-t-3xl'></span>
      <div className='flex md:flex-row flex-col w-[90vw] mx-auto rounded-full my-5 md:p-20 px-5'>
        <div className='md:w-1/2 w-full flex flex-col justify-center items-center'>
          {/* <span className='w-[89px] h-[3px] bg-primary inline-block'></span> */}
          <div>
            <h3 className='text-3xl font-bold'>Let us discuss your</h3>
            <h3 className='text-3xl font-bold'>marketing strategy!</h3>
            <span className='inline-block w-32 bg-primary rounded-full h-1'></span>
          </div>
          <div className='my-10'>
            <p><HiOutlineMail className='inline text-blue-600' /><a className='text-black' href={`mailto:${import.meta.env?.VITE_EMAIL}`}>{import.meta.env?.VITE_APP_EMAIL}</a> </p>
            <p><FcCallback className='inline' /> <a className='text-black' href={`tel:+${import.meta.env?.VITE_PHONE_NUMBER}`}>{import.meta.env?.VITE_APP_PHONE_NUMBER}</a> </p>
          </div>
          <div>
            <div className='flex justify-center my-10'>
              <a href={import.meta.env?.VITE_APP_FACEBOOK_URL} target="_blank"><AiFillFacebook className='inline text-[30px] mx-4 text-blue-500' /></a>
              <a href={import.meta.env.VITE_APP_LINKEDIN_URL} target="_blank"><FaLinkedin className='inline text-[30px] mx-4 text-blue-500' /></a>
              <a href={import.meta.env.VITE_APP_INSTAGRAM_URL} target="_blank"><img className='w-[30px]' src="https://i.ibb.co/Sx4723y/small-instagram-icon-0.png" alt="" /></a>
              <a href={import.meta.env.VITE_APP_TWITTER_URL} target="_blank"><FaTwitter className='inline text-[30px] mx-4 text-blue-300' /></a>

            </div>
          </div>
        </div>
        <div className='md:w-1/2 w-full'>
          <p>Or you can also contact us here </p>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <input type="text"
              className="my-5 rounded-xl  bg-white shadow-xl py-3 border-2 border-slate-200 px-3 border-solid inline-block"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
              placeholder='Name'
            />
            {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Name is required</p>}
            <input type="email"
              className="my-5 rounded-xl  bg-white shadow-xl py-3 border-2 border-slate-200 px-3 border-solid inline-block"
              placeholder='Email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
            />
            {errors.email?.type === 'required' && <p role="alert" className='text-red-500'>Email is required</p>}
            <input type="text"
              className="my-5 rounded-xl  bg-white shadow-xl py-3 border-2 border-slate-200 px-3 border-solid inline-block"
              placeholder='Subject'
              {...register("subject", { required: true })}
              aria-invalid={errors.subject ? "true" : "false"}
            />
            {errors.subject?.type === 'required' && <p role="alert" className='text-red-500'>Subject is required</p>}
            <input type="text"
              className="my-5 rounded-xl  bg-white shadow-xl py-3 border-2 border-slate-200 px-3 border-solid inline-block"
              bordered
              placeholder='Message'
              {...register("message", { required: true })}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message?.type === 'required' && <p role="alert" className='text-red-500'>Message is required</p>}
            <input className='my-5 bg-primary w-full block p-5 rounded-xl text-white' type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact