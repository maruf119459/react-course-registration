import PropTypes from 'prop-types';
const Courese = ({coures, handelSelectCourse,handleShowMessage,utility}) => {
    const {img,title,description,price,credit} = coures;
    const total = utility[0];
    console.log('total '+total);
    return (
        <div className='w-[312px] h-[402px] flex flex-col px-[16px]  py-[16px] bg-[#FFF] rounded-xl	'>
            <img src={img} alt={`imgae of ${title}`} />
            <h2 className=' text-[18px] font-semibold'>{title}</h2>
            <p className='text-[14px] text-[#1C1B1B60] text-justify	pe-[16px]'>{description}</p>
            <div className='flex gap-[10px]	w-[280px] text-[16px] text-[#1C1B1B60]'>
                {/* price section */}
                <div className='flex justify-center	items-center gap-[2px]	'>
                    <img className='w-[24px] h-[24px]' src="https://i.ibb.co/jhKMjgj/dollar.png"  alt="dollar" border="0" />                    
                    <p>Price: {price}USD</p>             
                </div>

                {/* Credit section */}
                <div className='flex justify-center	items-center gap-[2px]	'>
                    <img className='w-[24px] h-[24px]'  src="https://i.ibb.co/vLGGVvj/book.png" alt="book" border="0" />
                    <p>Credit: {credit}hr</p>
                </div>
            </div>
            {
    (total < 20 )? (
        <button
            onClick={() => handelSelectCourse(coures)}
            className="w-[280px] h-[40px] ms-[12px] bg-[#2F80ED] rounded-lg border-none text-[18px] font-semibold text-[#fff] hover:bg-sky-700">
            Select
        </button>
    ) : (
        <button
            // disabled
            onClick={() => handleShowMessage()}
            className="w-[280px] h-[40px] ms-[12px] bg-[#2F80ED] rounded-lg border-none text-[18px] font-semibold text-[#fff] hover:bg-sky-700">
            Select
        </button>
    )
}
        </div>
    );
};
Courese.propTypes = {
    coures: PropTypes.object.isRequired,
    handelSelectCourse: PropTypes.func.isRequired,
    handleShowMessage: PropTypes.func.isRequired,
    utility: PropTypes.array.isRequired,
  };

export default Courese;