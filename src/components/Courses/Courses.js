import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';



const Courses = () => {
    // const [courses, setCourses] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/courses')
    //         .then(res => res.json())
    //         .then(data => setCourses(data))
    // }, [])
    const courses = useLoaderData();



    return (
        <div className="flex container mx-auto">
            <div className='flex-auto w-1/4'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="flex-auto w-3/4 ">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center text-violet-600">
                    <h2 className="text-3xl font-bold">Database Design & Development Learning Platforms</h2>

                </div>
                <div className='lg:md:grid grid-cols-3 xs:sm:grid-cols-1'>
                    {
                        courses.map(course =>

                            <div className="card card-compact w-64 bg-base-100 shadow-xl mb-4 " key={course._id}>
                                <figure><img src={course.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{course.name}</h2>
                                    {
                                        course.details.length > 100 ?
                                            <p>{course.details.slice(0, 100) + '...'}</p>
                                            :
                                            <p>{course.details}</p>

                                    }
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary"><Link to={`/course/${course._id}`}>DETAILS</Link></button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;