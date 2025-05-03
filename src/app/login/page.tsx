/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
// import { useUserLoginMutation } from '@/redux/api/authApi';
"use client"
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FromInput';
import { localStorageHelper } from '@/helper/credential';
import { useUserLoginMutation } from '@/redux/api/authApi';
import { Button, Input, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from "react-hook-form"

type Inputs = {
    email: string
    password: string
}




const page = () => {
    const router=useRouter()

    const [userLogin] = useUserLoginMutation()


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        
        const loginResponse = await userLogin(data);

        
        // @ts-ignore
        if (loginResponse?.data?.data?.accessToken) {
            router.back()
        } 


        // @ts-ignore
        localStorageHelper.saveToLocalStorage('BBP_TOKEN',
            { "BBP_Access_token": loginResponse?.data?.data?.accessToken });
        
        // @ts-ignore       
        if (loginResponse?.data?.success===true) {
            message.success('Login Success')
        } else {
            message.error(loginResponse?.error?.message)
        }
      }
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-7 sm:h-8" src="https://i.ibb.co.com/cbm2zMP/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.jpg" alt="" />
                            </div>

                            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
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

                            <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet?
                               <Button type='primary' onClick={()=>router.replace('/signup')}>
                                   Sign up
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden bg-contain bg-no-repeat bg-white lg:block lg:w-2/3"
                    style={{
                        backgroundImage: "url(https://i.ibb.co.com/cbm2zMP/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.jpg)"
                    }}
                >
                </div>


            </div>
        </div>
    );
};

export default page;