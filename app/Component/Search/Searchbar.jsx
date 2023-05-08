'use client';
import React from 'react';

const Searchbar = () => {
    return (
        <div>
            <form action="" className='flex justify-center m-auto '>
                <input type="text" placeholder='Search your product..' className='p-[0.5rem_1.5rem] md:w-[350px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg'/>
                <button className='bg-blue-500 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg'>Search</button>
            </form>
        </div>
    );
}

export default Searchbar;
