import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Courese from "../Courese/Courese";

const Coureses = ({handelSelectCourse ,handleShowMessage,utility}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])

    console.log(courses);

    return (
        <div className="grid grid-cols-3 gap-[24px]">
            {
                courses.map(coures => <Courese key={coures.id} utility={utility} coures={coures} handleShowMessage={handleShowMessage} handelSelectCourse={handelSelectCourse} ></Courese>)
            }
        </div>
    );
};

Coureses.propTypes = {
    handelSelectCourse: PropTypes.func.isRequired,
    handleShowMessage: PropTypes.func.isRequired,
    utility: PropTypes.array.isRequired,
};

export default Coureses;