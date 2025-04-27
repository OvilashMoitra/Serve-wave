/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client"
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FromInput';
import { localStorageHelper } from '@/helper/credential';
import { useUserSignUpMutation } from '@/redux/api/authApi';
import { Button, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

type Inputs = {
    email: string
    password: string
}

const page = () => {
    const router=useRouter()
    const [userSignup,{data,isLoading}]=useUserSignUpMutation()

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        const loginResponse = await userSignup(data).unwrap();
        if (loginResponse?.data?.accessToken) {
            router.back()
        } 
        localStorageHelper.saveToLocalStorage('BBP_TOKEN',
            { "BBP_Access_token": loginResponse?.data?.accessToken });
        message.success('Sign up Success')
      } 
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">


                <div className="hidden bg-contain bg-no-repeat bg-white lg:block lg:w-2/3"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/cbm2zMP/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.jpg)"
                    }}
                >
                </div>

                

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-7 sm:h-8" src="https://i.ibb.co.com/cbm2zMP/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.jpg" alt="" />
                            </div>

                            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign up to access your account</p>
                        </div>

                        <div className="mt-8">
                        <Form submitHandler={onSubmit}>
                                <div>
                                    <FormInput
                                        type="email"
                                        name='email'
                                        placeholder='Email'
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        {/* <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label> */}
                                        <Link href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</Link>
                                    </div>
                                    {/* <Input.Password placeholder="input password"  /> */}
                                    <FormInput
                                        type="password"
                                        name='password'
                                        placeholder='Enter your password'
                                    />
                                </div>

                                <div className="mt-6 flex justify-center">
                                  <Button type='primary' htmlType="submit">submit</Button>
                                </div>

                            </Form>

                            <p className="mt-6 text-sm text-center text-gray-400">Already have an account
                                <Button type='primary' onClick={()=>router.replace('/login')}>
                                   Login
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default page;