'use client';
import Link from "next/link";
import { useState } from "react";
const Searchbar = () => {
    const [url, seturl] = useState();
    const func = (e)=>{
        if (e.target.value=="") {            
            alert("working")            
        }   
        else{            
            seturl(e.target.value)
        }
         }
    return (
        <div>
            <form action="" className='flex justify-center m-auto '>
                <input type="text" placeholder='Search your product..' onKeyUp={func} className='p-[0.5rem_1.5rem] md:w-[350px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg'/>
                <Link href={`/search/${url}`} onClick={func} className='bg-blue-500 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg'>Search</Link>
            </form>
        </div>
    );
}

export default Searchbar;
