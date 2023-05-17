'use client';
import Link from "next/link";
// import { useState } from "react";
// const Searchbar = () => {
//     const [url, seturl] = useState();
//     const func = (e)=>{ 
//             seturl(e.target.value) 
//          }
//     return (
//         <div>
//             <form action="" className='flex justify-center m-auto '>
//                 <input type="text" placeholder='Search your product..' onKeyDown={func} className='p-[0.5rem_1.5rem] md:w-[350px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg'/>
//                 <Link href={`/search/${url}`}  className='bg-blue-500 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg'>Search</Link>
//             </form>
//         </div>
//     );
// }

// export default Searchbar;



import React from 'react';
import { useState } from 'react';
const Searchbar = () => {   
    const [query, setquery] = useState('');
    const handlesubmit = ()=>{
        if (query!="") {
            alert(ok)
        }
        e.preventDefault();
        
        console.log(query);
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Search your product..' value={query} onChange={(e)=> setquery(e.target.value)} className='p-[0.5rem_1.5rem] md:w-[350px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg' />
            <button type='submit'> <Link  href={`/search/${query}`}  className='bg-blue-500 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg'>Search</Link> </button>
        </form>
    </div>
  );
}

export default Searchbar;

