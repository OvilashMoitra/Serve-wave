"use client"

const HomePageBanner = () => {
    return (
        <>
            {/* <!-- Hero --> */}
            <div className="bg-slate-900">
                <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-36 space-y-8">
                        {/* <!-- Announcement Banner --> */}
                        {/* <div className="flex justify-center">
                    
                        </div> */}
                        {/* <!-- End Announcement Banner --> */}

                        {/* <!-- Title --> */}
                        <div className="max-w-3xl text-center mx-auto">
                            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                Now its easier than ever to grow business with Serve wave
                            </h1>
                        </div>
                        {/* <!-- End Title --> */}

                        <div className="max-w-3xl text-center mx-auto">
                            <p className="text-lg text-gray-400">
                               Serve wave  is a leading technology solutions provider dedicated to helping businesses overcome challenges and enhance their digital presence. With a team of highly skilled professionals and a focus on innovation, Serve wave specializes in identifying, diagnosing, and resolving complex technical issues for businesses across various industries.
                            </p>
                        </div>

                        {/* <!-- Buttons --> */}
                        <div className="text-center">
                            <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
                                Get started
                                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                        {/* <!-- End Buttons --> */}
                    </div>
                </div>
            </div>
            {/* <!-- End Hero --> */}
        </>
    );
};

export default HomePageBanner;