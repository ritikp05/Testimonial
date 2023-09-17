import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonial = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    }
    else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {

    if (index + 1 >= reviews.length) {
      setIndex(0);
    }
    else {
      setIndex(index + 1);
    }
  }

  function suppriseShiftHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    console.log(randomIndex)
    setIndex(randomIndex);

  }

  return (
    <div className='w-80 border-2 mb-2 '><Card review={reviews[index]} />

      {/* since our data is placed in this component there fore we also placing all buttons in this component */}
      <div className='flext flex-row gap-8 justify-center '>
        <button className='text-violet-400  m-3' onClick={leftShiftHandler}><FiChevronLeft /></button>
        <button className='text-violet-400 m-3' onClick={rightShiftHandler}><FiChevronRight /></button>

      </div>
      <div>
        <button className='bg-violet-500 m-3 px-4 py-1 rounded-md
         hover:bg-violet-600 transition-all duration-200 
         cursor-pointer text-white' onClick={suppriseShiftHandler}>Suprise Me</button>
      </div>
    </div>
  )
}

export default Testimonial;
