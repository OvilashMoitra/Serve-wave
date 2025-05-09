"use client"
import { useGetAllStatsQuery } from '@/redux/api/statsApi';
import { Spin } from 'antd';


const Stats = () => {


    const { data, isLoading } = useGetAllStatsQuery(undefined)


    console.log(data,'stats');

    return (
        <>
            {/* <!-- Card Section --> */}
            <div className="max-w-[85rem] px-4 py-20  mx-auto">
                {/* <!-- Grid --> */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* <!-- Card --> */}
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                        <div className="p-4 md:p-5 flex gap-x-4">
                            <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800">
                                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                </svg>
                            </div>

                            <div className="grow">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">
                                        Total users
                                    </p>
                                    <div className="hs-tooltip">
                                        <div className="hs-tooltip-toggle">
                                            <svg className="w-3.5 h-3.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                            </svg>
                                            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                                                The number of daily users
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-1 flex items-center gap-x-2">
                                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                                        {
                                            isLoading ? <Spin /> : <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                                {data?.data[0]?.users}
                                    </h3>
                                        }
                                        {/* {users} */}
                                    </h3>
                                    <span className="inline-flex items-center gap-0.5 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
                                        <svg className="-ml-1 inline-block w-5 h-5 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                                        </svg>
                                        {/* <span className="inline-block text-xs font-medium">
                                            12.5%
                                        </span> */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                    {/* <!-- Card --> */}
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                        <div className="p-4 md:p-5 flex gap-x-4">
                            <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800">
                                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z" />
                                </svg>
                            </div>

                            <div className="grow">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">
                                        Blogs
                                    </p>
                                </div>
                                <div className="mt-1 flex items-center gap-x-2">
                                    <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                    {
                                        isLoading ? <Spin /> : <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                            {data?.data[0]?.blogs}
                                    </h3>
                                    }
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                        <div className="p-4 md:p-5 flex gap-x-4">
                            <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800">
                                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435a4.9 4.9 0 0 1 .106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
                                </svg>
                            </div>

                            <div className="grow">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">
                                        Orders
                                    </p>
                                </div>
                                <div className="mt-1 flex items-center gap-x-2">
                                    {
                                        isLoading ? <Spin /> : <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                            {data?.data[0]?.orders}
                                    </h3>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                        <div className="p-4 md:p-5 flex gap-x-4">
                            <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800">
                                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </div>

                            <div className="grow">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">
                                        Pageviews
                                    </p>
                                    <div className="hs-tooltip">
                                        <div className="hs-tooltip-toggle">
                                            <svg className="w-3.5 h-3.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                            </svg>
                                            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                                                The average pageviews
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-1 flex items-center gap-x-2">
                                    {
                                        isLoading ? <Spin /> : <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                            {data?.data[0]?.websiteVisits}
                                    </h3>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Card --> */}
                </div>
                {/* <!-- End Grid --> */}
            </div>
            {/* <!-- End Card Section --> */}
        </>
    );
};

export default Stats;