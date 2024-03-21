import PropTypes from 'prop-types';
import SelectedOneCourse from '../SelectedOneCourse/SelectedOneCourse';
const Coursecart = ({selectedCourse ,utility}) => {
    const [total,remainig,totalMoney] = utility
    
    return (
        <div className="w-[312px] h-auto rounded-xl bg-[#fff] py-[16px] px-[16px]">
            <h3 className="text-[18px] text-[#2F80ED] font-bold">Credit Hour Remaining {remainig} hr</h3>
            <hr className="border-t-1  border-[#1C1B1B60]" />
            <h3 className="text-[20px] font-bold pb-[10px]">Course Name</h3>
            {
                selectedCourse.map((singleCourse, index) => <SelectedOneCourse key={index} index={index}  singleCourse={singleCourse} ></SelectedOneCourse>)
            }
            <hr className="border-t-1  border-[#1C1B1B60]" />
            <h4 className="text-[16px] font-medium">Total Credit Hour : {total}</h4>
            <hr className="border-t-1  border-[#1C1B1B60]" />
            <h4 className="pb-[5px] text-[16px] font-semibold">Total Price : {totalMoney} USD</h4>

        </div>
    );
};

Coursecart.propTypes = {
    selectedCourse: PropTypes.array.isRequired,
    utility: PropTypes.array.isRequired,
};

export default Coursecart;