"use client"
// @ts-nocheck
import { Button, Dropdown, MenuProps, Space } from "antd";
import { RxAvatar } from 'react-icons/rx';
import Link from "next/link";
import { localStorageHelper } from "@/helper/credential";
import { useRouter } from "next/navigation";
import { IoMdNotifications } from "react-icons/io";
import { useGetNotificationsbyUserQuery, useReadNotificationsMutation } from "@/redux/api/notificationApi";



const Navbar = () => {

    const isLogedIn = localStorageHelper.getUserInfo()
    const { data: notifications } = useGetNotificationsbyUserQuery(
        isLogedIn?.data?._id, 
        {
            pollingInterval: isLogedIn?.data?._id ? 3000 : 0, // Start polling if logged in, otherwise no polling
            skip: !isLogedIn?.data?._id, // Skip if not logged in
        }
    );

    const [readNotification]=useReadNotificationsMutation()

    const route=useRouter()
    console.log({ isLogedIn }, 16);



    const handleLogout = () => {
        localStorageHelper.removeFromLocalStorage('BBP_TOKEN')
        route.push('/login')
    }

    const items: MenuProps["items"] = [
        {
            key: '1',
            label: (
                  <Link className="px-10" href="/profile">
                     Profile
                  </Link>
          ),
        },
        
        {
            key: '2',
            label: (
                  <Link className="px-10" href="/order">
                      Order
                    </Link>
          ),
        },
        {
            key: '3',
            label: (
                  <Link className="px-10" href="/cart">
                      Cart
                    </Link>
          ),
        },
        {
            key: '4',
            label: (

                     <Link className={`px-10 ${isLogedIn?.data?.role === "89898hhu98" ? "":"hidden"}`} href="/super_admin/manage_order">
                       Admin Dashboard
                    </Link>
          ),
        },
        {
            key: '5',
            label: (
                <div className="flex justify-center">
                     <Button onClick={handleLogout} style={{background:"red",color:"white"}} type="primary">
                     Log out
                    </Button>
                 </div>
          ),
        }
    ];
    

    const notifcationsItems: MenuProps['items'] = notifications?.data?.map(item => ({
        label: (
            <p>
                  {item?.message}
            </p>
           
        ),
        key: '0',
    }));


    const unreadNotification =notifications?.data?.filter(item=>item.read===false)
    const notificationButton = unreadNotification?.length > 0 ? <IoMdNotifications
        onClick={()=>readNotification(isLogedIn?.data?._id)}
        className={`font-bold text-lg text-red-500`} /> : <IoMdNotifications className={`font-bold text-lg `} />
    
      

    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
            <nav className="mt-6 relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-10 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
                <div className="flex items-center justify-between">
                    <Link className="flex-none text-xl py-5 font-semibold dark:text-white" href="/" aria-label="Brand">Serve wave</Link>
                    <div className="md:hidden">
                        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
                        {/* <Link className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="/work">Work</Link> */}
                        <button>
                            
                            <Dropdown menu={{ items:notifcationsItems }} trigger={['click']}>
                                {/* <a onClick={(e) => e.preventDefault()}> */}
                                <Space>
                                    {notificationButton}
                                </Space>
                             {/* </a> */}
                            </Dropdown>
                        </button>
                        <Link className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="/blog">Blog</Link>
                        {
                            // @ts-ignore
                           !isLogedIn?.data?._id?<Link
                                    className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="/login">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                   </svg>
                                   Log in
                            </Link> :
                                <Dropdown
                                    menu={{ items }} placement="bottomRight" arrow>
                                   <RxAvatar className='text-xl' />
                                </Dropdown>
                                
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;