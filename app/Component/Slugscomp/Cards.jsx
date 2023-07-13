import React from 'react';
import {AiTwotoneStar} from  'react-icons/ai'
import Link from 'next/link';
import Suggested from './Suggested';
const Cards = ({result,id}) => {
  return (
    <div>
       <div className='flex my-4 flex-col md:flex-row w-[90%] md:w-[80%] justify-between m-auto items-center'>
        <div className='md:w-[60%] overflow-hidden'>
          <img className='w-full overflow-hidden' src={result.thumbnail} alt="" />
        </div>
        <div className='md:w-[35%] space-y-4'>
          <div className='text-xl font-semibold text-center'>{result.title}</div>
          <div className='text-sm font-normal text-center text-blue-600 cursor-pointer'>{result.brand}</div>
          <div>{result.description}</div>
          <div className='flex justify-between items-center'>
            <div className='font-bold'>${result.price}</div>
             <div className='font-bold text-yellow-600 flex items-center'><AiTwotoneStar/>{result.rating>4.5?"Top Rated":result.rating} </div>
          </div>
          <div className={`${result.stock<35?"text-red-500":"text-blue-500"}`}>{result.stock<35?"few stock left":"In Stock"}</div>
          <div className='flex justify-center space-x-4 items-center'>
            <Link className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-blue-400 hover:shadow-2xl text-white bg-[#388e3c]' href="">Add To Cart</Link>
            <Link className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-blue-400 hover:shadow-2xl text-white bg-[#388e3c]' href={`/buy/${id}`}>Buy Now</Link>
          </div>
        </div>
       </div>


       <div>
        <Suggested category={result.category}/>
       </div>
    </div>
  );
}

export default Cards;
