import React from 'react';
import Link from 'next/link';
import {AiTwotoneStar} from  'react-icons/ai'
const Card = ({ result }) => {
    return (
        <>
            <div className='my-[20px] flex flex-col justify-between m-auto w-[100%] md:w-[calc(50%-10px)] lg:w-[calc(25%-20px)] items-center overflow-hidden'>
                <div className='flex flex-col space-y-2 h-[45vh] w-full text-center items-center'>
                    <div className='h-[32vh] overflow-hidden object-cover bg-gray-300  flex justify-center items-center'>
                        <img src={result?.images[0]} className='w-full h-full' alt="Picture of the author" />
                    </div>
                    <div className='text-[20px] text-blue-500'>
                        {result.title}
                    </div>
                    <div className='flex justify-between w-[80%]'>
                        <div className='font-medium text-[#388e3c]'>${result.price}</div>
                        <div className='font-medium text-yellow-600 flex items-center'><AiTwotoneStar/>{result.rating} </div>
                    </div>
                    <div className='flex justify-between w-[80%]'>
                        <Link href={`/productdetail/${result.id}`} className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-gray-400 hover:shadow-2xl text-white bg-gray-500'>View Detail</Link>
                        <Link href={`/buy/${result.id}`} className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-blue-400 hover:shadow-2xl text-white bg-blue-400'>Buy now</Link>

                    </div>
                </div>

            </div>

        </>
    );
}

export default Card;
