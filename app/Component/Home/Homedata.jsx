import React from 'react';
import Link from 'next/link';
import Card from './Card';
import Cards from '../Slugscomp/Cards';
const fetchfunc = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100");  
  await new Promise((resolve) => setTimeout(resolve,1000));
  const result = await res.json();
  return result.products;
}
const Homedata = async () => {
  const result = await fetchfunc(); 
  return (
    <div>
      <div className='flex justify-center m-auto w-[80%] flex-wrap'> 
      {
        result.map((pro,i)=>(
          <>
          
             <Card key={i} result={pro}/>
             
          </>
   
        ))
      }
       
      </div>
    </div>
  )
}

export default Homedata;