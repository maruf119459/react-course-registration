import './App.css'
import Coureses from './Componentes/Coureses/Coureses'
import Header from './Componentes/Header/Header'
import Coursecart from './Componentes/Coursecart/Coursecart'
import PopupMessage from './Componentes/Message/PopupMessage'
import { useState } from 'react'
import {totalCredit,remainigCredit,totalPrice,} from './Utilities/countCridet';

function App() {

  const [selectedCourse, setSelectedCourse] = useState([]);
  const total = totalCredit(selectedCourse);
  const remainig = remainigCredit(total);
  const handelSelectCourse = (course) =>{
    if(!course.ispresent){
      course.ispresent = true;
      console.log(course);
      let newCourse = [...selectedCourse, course];
      if(remainig > 0){
        setSelectedCourse(newCourse);
      }
      else{
        newCourse = selectedCourse.slice(0, -1);
        setSelectedCourse(newCourse);
      }
    }
  }
  
  const totalMoney = totalPrice(selectedCourse);

  const utility = [total,remainig,totalMoney];


  const [showMessage, setShowMessage] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
  };
  

  return (
    <>
      <div className='bg-[#F3F3F3] '>
        <Header></Header>
        {showMessage && <PopupMessage message="Max limit is 20 credit." />}
        <div className='px-[60px] flex items-start	 gap-[24px]' >
          {/* all courses display section */}
          <div>
            <Coureses handelSelectCourse={handelSelectCourse} handleShowMessage={handleShowMessage} utility={utility}></Coureses>
          </div>

          {/* selected course section */}
          <div>
              <Coursecart selectedCourse={selectedCourse} utility={utility}></Coursecart>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
