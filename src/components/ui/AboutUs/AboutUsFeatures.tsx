
import React from 'react';

const AboutUsFeatures = () => {

    const aboutUsFeaturesData = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>,
            title: "Expertise",
            text: "Our team comprises experienced professionals who excel in diagnosing and resolving a wide range of technical issues."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            ,
            title: "Tailored Solutio",
            text: "We understand that every business is unique. Our solutions are customized to address your specific challenges and goals."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>,
            title: "Reliability",
            text: "Businesses trust Serve wave Pro for our reliable services, quick turnaround times, and exceptional customer support."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>,
            title: "Innovation",
            text: "We stay ahead of the curve by adopting the latest technologies and industry best practices to deliver cutting-edge solutions."
        }
    ]

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className='flex flex-col items-center'>
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our contribution <br /> <span className='underline text-blue-400'>to Grow Business</span> </h1>

                    <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        How we help you to grow
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    {/* Single feature */}
                    {aboutUsFeaturesData.map(features => <div key={features.title} className="space-y-3">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            {features.icon}
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{features.text}</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            {features.title}
                        </p>
                    </div>)}

                </div>
            </div>
        </section>
    );
};

export default AboutUsFeatures;