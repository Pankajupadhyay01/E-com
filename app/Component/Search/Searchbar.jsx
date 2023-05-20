'use client';
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation'
const Searchbar = () => {   

    const [url, seturl] = useState();
    const [link, setlink] = useState("/");
    const func = (e) => {  
        seturl(e.target.value)
        if (e.target.value=="") {
            setlink('/')
        }
        else{
            setlink(`/search/${url}`)
        }
            
    }

    const router = useRouter()
    const func_p = (e) => {
        e.preventDefault();
        router.push(link)
    }

    return (
        <div>
            <form onSubmit={func_p} className='flex justify-center m-auto' >
                <input type="text" placeholder='Search your product..' value={url} onChange={func} className='p-[0.5rem_1.5rem] md:w-[350px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg' />
                <Link type='submit' href={link} className='bg-blue-500 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg'>Search</Link>
            </form>
        </div>
    );
}

export default Searchbar;


 
