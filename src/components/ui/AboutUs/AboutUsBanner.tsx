/* eslint-disable @next/next/no-img-element */


const AboutUsBanner = () => {
    return (
        <div className="w-full mx-auto flex justify-center my-32">
            <div className="lg:flex">
                <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Build Your New <span className="text-blue-600 dark:text-blue-400">Business</span></h2>

                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                            we are driven by a passion for problem-solving and a commitment to helping businesses thrive in the digital landscape. With a team of skilled professionals, we specialize in identifying and fixing technical bugs that can hinder your business growth. Our innovative solutions and strategic approaches are tailored to meet the unique needs of your business, ensuring seamless functionality and optimal performance.
                        </p>

                        <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                            <a href="#about_usRead_more" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img className="rounded-lg" src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsBanner;