'use client';
import Link from 'next/link';
import React from 'react';
import { FaBars, FaShuttleVan } from 'react-icons/fa';
import { BsFillCartFill, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineContacts, AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react';
import Searchbar from './Search/Searchbar';

const Nav = () => {
    const [open, setopen] = useState(false);
    const func = () => {
        setopen(!open)
        if(!open){
            document.body.style.overflow="hidden";
        }
        else{
            document.body.style.overflow="auto"
        }
    }
    return (
        <div>
            <nav className='bg-white shadow-black shadow-[0_0_10px]  w-full py-2 space-y-4'>
                <div className='flex justify-between md:mx-5 mx-[10px] items-center'>
                    <div className='flex items-center space-x-4'>
                        <div onClick={func} className='text-blue-500 text-lg md:hidden flex'>
                            <FaBars />
                        </div>
                        <div  className="capitalize text-3xl md:text-2xl font-bold ">
                           <Link href="/">logo</Link> 
                        </div>
                    </div>

                    <div className='hidden md:flex md:items-center '>
                        <Searchbar />
                    </div>

                    <div className='flex items-center space-x-3'>
                        <Link href="/cart" className='text-blue-500 text-xl md:text-3xl'>
                            <BsFillCartFill />
                        </Link>
                        <Link href="" className='border-[1px] border-gray-400 rounded-lg px-[10px] bg-blue-500 text-white py-[5px]'>
                            Become a Seller
                        </Link>
                    </div>
                </div>


                {/* second nav */}

                <div>
                    <div className='md:hidden  '>
                        <Searchbar />
                    </div>
                </div>
            </nav>

            {/* sidebars  */}
            <nav className={`${open ? "left-0" : "left-[-100%]"} z-[999] fixed top-0 h-[100vh] w-[80%] bg-white`}>
                <div className='text-blue-500 text-2xl'>
                    <div className='absolute right-5' onClick={func}><AiOutlineClose /></div>
                </div>
                <div className='my-[20px]'>

                    <div className='space-y-5 list-none mx-10'>
                        <li> <Link href="/" className='flex space-x-4 items-center text-lg text-gray-500 hover:text-blue-600'> <AiOutlineHome />  Home</Link></li>
                        <li> <Link href="/" className='flex space-x-4 items-center text-lg text-gray-500 hover:text-blue-600'> <AiOutlineContacts /> Contact</Link></li>
                        <li> <Link href="/" className='flex space-x-4 items-center text-lg text-gray-500 hover:text-blue-600'> Categories </Link>  </li>
                        <li> <Link href="/" className='flex space-x-4 items-center text-lg text-gray-500 hover:text-blue-600'> <FaShuttleVan /> Order </Link> </li>
                        <li> <Link href="/cart" className='flex space-x-4 items-center text-lg text-gray-500 hover:text-blue-600'> <AiOutlineShoppingCart />  My Cart/Link</Link></li>
                        <li> <Link href="/" className='flex space-x-4 items-center text-lg text-gray-500 hover:text-blue-600'> <BsFillPersonFill /> My Account</Link></li>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Nav;
