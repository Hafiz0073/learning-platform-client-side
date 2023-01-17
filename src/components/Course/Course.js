import React from 'react';
import { FaIcons } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { FaCloudDownloadAlt } from 'react-icons/fa'

const Course = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Learn With {courseDetails.name}</h2>

                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Details</h3>
                            <p className="mt-3 text-lg dark:text-gray-400"> {courseDetails.details}</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-start justify-flex-start w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">{courseDetails.feature1}</h4>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-start justify-flex-start w-10 h-10 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">{courseDetails.feature2}</h4>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-start justify-flex-start w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">{courseDetails.feature3}</h4>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-start justify-flex-start w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">{courseDetails.feature4}</h4>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-start justify-flex-start w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">{courseDetails.feature5}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <div className="lg:flex flex-col items-end ">
                                <div>
                                    <FaCloudDownloadAlt size={70}></FaCloudDownloadAlt>
                                </div>

                                <div className="mt-6">
                                    <img src={courseDetails.img} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                                </div>
                                <div className="mt-6">
                                    <button className="btn no-animation">I don't have click animation</button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Course;