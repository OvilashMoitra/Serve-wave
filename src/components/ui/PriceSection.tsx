"use client"
import { localStorageHelper } from "@/helper/credential";
import { useCreateCartMutation } from "@/redux/api/cartApi";
import { useGetAllServiceQuery } from "@/redux/api/service";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const PriceSection = () => {
    // !hooks
    const route = useRouter()
    const userInfo = localStorageHelper.getUserInfo();
    const { data } = useGetAllServiceQuery(undefined)
    const [addToCart]=useCreateCartMutation()

    // !functions
    const handleAddToCart = async (id: string) => {
        // @ts-ignore
        if (!userInfo?.data?._id) {
            message.error("Login to add to cart")
            route.push('/login')
            return
        }
        // @ts-ignore
        const cartInfo = {
            serviceId: id,
             // @ts-ignore
            userId: userInfo?.data?._id
        }
        try {
            const addCartResponse = await addToCart(cartInfo)
            route.push('/cart')
        } catch (error) {
            console.log(error)
        }
    }
    let services;
    if (data) {
        services = data?.data?.map((service: { category: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal  | null | undefined; serviceName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal  | null | undefined; features: any[];id:string}) => <>
            <div className="max-w-[100rem]  px-20 border-2 border-black py-12 transition-colors duration-300 transform rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{service?.category}</p>

                <h4 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">{} <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>

                <p className="mt-4 text-gray-500 dark:text-gray-300">{service?.serviceName}</p>

                <div className="mt-8 space-y-8">
                    {service?.features?.map(feature => <div key={`${feature}`} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>)}
                </div>

                <button onClick={()=>handleAddToCart(service?.id)} className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose plan
                </button>
            </div>
        </>)
    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-gray-100">Simple, transparent pricing</h2>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">No Contracts. No surprise fees.</p>
                    </div>

                    <div className="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
                        <div className="sm:-mx-0.5 flex">
                            <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">Monthly</button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 mt-16 flex-wrap justify-center">
                    {services}
                </div>
            </div>
        </section>
    );
};

export default PriceSection;
