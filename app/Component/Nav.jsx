'use client';
import Link from 'next/link';
import React from 'react';
import { FaBars, FaShuttleVan } from 'react-icons/fa';
import { BsFillCartFill, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineContacts, AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/Ai'
import { useState } from 'react';
import Searchbar from './Search/Searchbar';

const Nav = () => {
    const [open, setopen] = useState(false);
    const func = () => {
        setopen(!open)
    }
    return (
        <div>
            <nav className='bg-white shadow-black shadow-[0_0_10px] py-2 space-y-4'>
                <div className='flex justify-between md:mx-12 mx-[10px] items-center'>
                    <div className='flex items-center space-x-4'>
                        <div onClick={func} className='text-blue-500 text-lg md:hidden flex'>
                            <FaBars />
                        </div>
                        <div className="capitalize text-3xl md:text-2xl font-bold ">
                            logo
                        </div>
                    </div>

                    <div className='hidden md:flex md:items-center '>
                        <Searchbar />
                    </div>

                    <div className='flex items-center space-x-3'>
                        <Link href="" className='text-blue-500 text-xl md:text-3xl'>
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
            <nav className={`${open ? "left-0" : "left-[-100%]"} fixed top-0 h-[100vh] w-[80%] bg-white`}>
                <div className='text-blue-500 text-2xl'>
                    <div className='absolute right-5' onClick={func}><AiOutlineClose /></div>
                </div>
                <div className='my-[20px]'>

                    <div className='space-y-5 list-none mx-10'>
                        <li className='flex'> <span className='text-blue-500 mr-3'><AiOutlineHome /></span> Home</li>
                        <li className='flex'> <span className='text-blue-500 mr-3'><AiOutlineContacts /></span> Contact</li>
                        <li className='flex'>  Categories</li>
                        <li className='flex'> <span className='text-blue-500 mr-3'><FaShuttleVan /></span>Order </li>
                        <li className='flex'> <span className='text-blue-500 mr-3'><AiOutlineShoppingCart /></span> My Cart</li>
                        <li className='flex'> <span className='text-blue-500 mr-3'><BsFillPersonFill /></span> My Account</li>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Nav;