"use client"

import { useGetAllFAQQuery } from "@/redux/api/faqApi";
import { Collapse, CollapseProps } from "antd";
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

const FAQSection = () => {
    // !hook
    const { data, isLoading } = useGetAllFAQQuery(undefined)
    console.log({ data });

    // ! accordian data

    const accordianData = data?.data?.map((elem: { id: string; question: string; answer: string; }) => {
        return {
            key: elem?.id,
            label: elem?.question,
            children: <div className="rounded-xl m-5">
                <p className="p-6">{elem?.answer}</p>
            </div>,
        }
    })

    return (
        <div>
            {/* <!-- FAQ --> */}
            <div className="max-w-[105rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* <!-- Title --> */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
                </div>
                {/* <!-- End Title --> */}

                <div className="max-w-2xl mx-auto">
                    {/* <!-- Accordion --> */}
                    <div>
                        <Collapse style={{ color: 'white', fontSize: "bold", background: "grey" }} items={accordianData} defaultActiveKey={['1']} bordered />
                    </div>
                    {/* <!-- End Accordion --> */}
                </div>
            </div>
            {/* <!-- End FAQ --> */}
        </div>
    );
};

export default FAQSection;