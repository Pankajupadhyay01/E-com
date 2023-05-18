'use client';
import { useState } from 'react';
import Link from "next/link";
import { router } from "next/router";
const Searchbar = () => {
    const [url, seturl] = useState();
    const [link, setlink] = useState("/");
    const func = (e)=>{ 
        if (e.target.value.length<1) {
            setlink("/")
        }
        else{
            seturl(e.target.value)
            setlink(`/search/${url}`)
        }
            
         }

         const func_p = (e)=>{ 
            e.preventDefault();
             }

    return (
        <div>
            <form onSubmit={func_p} className='flex justify-center m-auto' >
                <input type="text" placeholder='Search your product..' value={url} onChange={func} className='p-[0.5rem_1.5rem] md:w-[350px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg'/>
                <Link type='submit' href={link}  className='bg-blue-500 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg'>Search</Link>
            </form>
        </div>
    );
}

export default Searchbar;




// const Searchbar = () => {   
//     const [query, setquery] = useState('');
//     const func = (e)=>{          
//            setquery(e.target.value) 
//     }
//     const handlesubmit = (e)=>{
//         if(query==""){
//             alert("Oops! Please type Something to Search ")
//         }
//         e.preventDefault();    
//         console.log(query);
//     }
//   return (
//     <div>
//         <form onSubmit={handlesubmit} className='flex justify-center m-auto' >
//             <input type="text" placeholder='Search your product..' value={query} onChange={func} className='p-[0.5rem_1.5rem] md:w-[350px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg' />
//             <button type='submit' className='bg-blue-500 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg'> Search</button>
//         </form>
//     </div>
//   );
// }

// export default Searchbar;

