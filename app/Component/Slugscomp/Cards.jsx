import React from 'react';
import {AiTwotoneStar} from  'react-icons/ai'
import Link from 'next/link';
const Cards = ({main_img,title,desc,brand,price,rating,stock}) => {
  return (
    <div>
       <div className='flex my-4 flex-col md:flex-row w-[90%] md:w-[80%] justify-between m-auto items-center'>
        <div className='md:w-[60%] overflow-hidden'>
          <img className='w-full overflow-hidden' src={main_img} alt="" />
        </div>
        <div className='md:w-[35%] space-y-4'>
          <div className='text-xl font-semibold text-center'>{title}</div>
          <div className='text-sm font-normal text-center text-blue-600 cursor-pointer'>{brand}</div>
          <div>{desc}</div>
          <div className='flex justify-between items-center'>
            <div className='font-bold'>${price}</div>
             <div className='font-bold text-yellow-600 flex items-center'><AiTwotoneStar/>{rating>4.5?"Top Rated":rating} </div>
          </div>
          <div className={`${stock<20?"text-red-500":"text-blue-500"}`}>{stock<20?"few stock left":"In Stock"}</div>
          <div className='flex justify-center space-x-4 items-center'>
            <Link className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-blue-400 hover:shadow-2xl text-white bg-blue-500' href="">Add To Cart</Link>
            <Link className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-blue-400 hover:shadow-2xl text-white bg-blue-500' href="">Buy Now</Link>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Cards;
