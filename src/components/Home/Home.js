import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const maincourse = useLoaderData()
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center text-violet-600">
                    <h2 className="text-3xl font-bold">Database Design & Development Learning Platforms</h2>

                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        maincourse.map(course =>
                            <div className="flex flex-col items-center p-4" key={course._id}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                </svg>

                                <h3 className="my-3 text-3xl font-semibold">{course.name}</h3>
                                <div className="space-y-1 leading-tight">
                                    {
                                        course.details.length > 150 ?
                                            <p>{course.details.slice(0, 150) + '...'}<button className="btn btn-link"><Link to={`/courses`}>Learn More</Link></button></p>
                                            :
                                            <p>{course.details}</p>
                                    }
                                </div>
                            </div>

                        )
                    }
                </div>

            </section>
        </div>
    );
};

export default Home;