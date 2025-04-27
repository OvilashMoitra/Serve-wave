/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='flex w-[90vw] mx-auto items-center md:flex-row flex-col'>
            <div className='md:w-1/2 w-full flex flex-col'>
                <h3 className='font-extrabold  md:text-6xl text-4xl'>The Digital Marketing Agency </h3>
                <span className='h-[5px] mt-3 bg-yellow-200 block rounded-full'></span>
                <br />
                <h3 className='font-extrabold md:text-6xl text-4xl'>That Drives <span className='text-yellow-400'>Revenue</span></h3>
                <br />
                <small>Featured in leading publications in the world</small>
                <Link href={'/contactus'} className='text-white inline'>
                    <button className='my-2 inline bg-[#f5a525] p-5 rounded-xl' >
                        Contact us
                    </button>
                </Link>
            </div>
            <div className='md:w-1/2 w-full flex  justify-end'>
                <img className='md:w-[70%]' src="https://i.ibb.co/KyLh8Tm/Social-Media-1.png" alt="" />
            </div>
        </div>
    );
};

export default Header;