import React from 'react';
import Link from 'next/link';
const Card = ({ title, price, rating, img,id }) => {
    return (
        <>
            <div className='my-[20px] flex flex-col justify-between m-auto w-[100%] md:w-[calc(50%-10px)] lg:w-[calc(25%-20px)] items-center overflow-hidden'>
                <div className='flex flex-col h-[45vh] w-full text-center items-center'>
                    <div className='h-[32vh] overflow-hidden object-cover bg-gray-300  flex justify-center items-center'>
                        <img src={img} className='w-full h-full' alt="Picture of the author" />
                    </div>
                    <div className='text-[20px] text-blue-500'>
                        {title}
                    </div>
                    <div className='flex justify-between w-[80%]'>
                        <div>${price}</div>
                        <div>{rating}</div>
                    </div>
                    <div className='flex justify-between w-[80%]'>
                        <Link href={`productdetail/${id}`}>View Detail</Link>
                        <Link href="">Buy now</Link>

                    </div>
                </div>

            </div>

        </>
    );
}

export default Card;
