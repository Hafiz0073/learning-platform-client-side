import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)
    return (
        <div>
            <h2>this is course {courseDetails.name}</h2>
            {/* {
                courseDetails.map(c_detail => <p key={c_detail._id}>{c_detail.feature1}</p>)
            } */}
        </div>
    );
};

export default Course;