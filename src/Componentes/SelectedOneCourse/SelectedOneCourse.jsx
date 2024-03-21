import PropTypes from 'prop-types';
const SelectedOneCourse = ({singleCourse ,index}) => {
    

    return (
        <p className='text-[#1C1B1B60]'>{`${index+1} ${singleCourse.title}`}</p>
    );
};
SelectedOneCourse.propTypes = {
    singleCourse: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default SelectedOneCourse;