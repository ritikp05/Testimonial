import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
const Card = ({review}) => {
  return (
    <div className='flex flex-col '>
        <div className='mx-auto '>
            <img className='rounded-full w-32' src={review.image} alt='img'/>
        </div>
        <div className='text-center mt-2'>
            <p className='font-bold text-xl capital'>{review.name}</p>
        </div>

        <div  className='text-center mt-2'>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>
        <div className='text-violet-400 mx-auto'>
            <FaQuoteLeft/>
        </div>
        <div className='text-center  text-slate-500'>
            {review.text}
        </div>
        <div className='text-violet-400 mx-auto'>
            <FaQuoteRight/>
        </div>
      
    </div>
  )
}

export default Card