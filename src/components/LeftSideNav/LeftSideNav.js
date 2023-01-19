import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <div className="container mx-auto p-4 my-4 space-y-2 text-left text-violet-600">
                <h2 className="text-2xl font-semi-bold">Our Platforms :</h2>

            </div>
            {
                courses.map(course =>
                    <ul className="menu bg-base-100 w-56 rounded-box " key={course.id}>
                        <li><Link to={`/course/${course._id}`}>{course.name}</Link></li>

                    </ul>
                )
            }
        </div>
    );
};




export default LeftSideNav;