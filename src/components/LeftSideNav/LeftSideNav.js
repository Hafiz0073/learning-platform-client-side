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
            <h2>Our Coursess{courses.length}</h2>
            <h2>Database Design & Development Courses</h2>
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