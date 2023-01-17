import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = ({ cdetail }) => {
    const { _id, feature1 } = cdetail
    return (
        <div>
            <p>{feature1}</p>
            <p><Link to={`/course/${_id}`}>details</Link></p>
        </div>
    );
};

export default CourseDetail;