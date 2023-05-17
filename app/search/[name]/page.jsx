import React from 'react';
import Card from '@/app/Component/Home/Card';
async function fetchurl(name) {
       const res = await fetch(`https://dummyjson.com/products/search?q=${name}`);
       await new Promise((resolve) => setTimeout(resolve,1000));
        const result = await res.json();
        return result.products;     
}
const page =async ({params:{ name }}) => { 
        const result= await fetchurl(name);  
  return (
    <div>  
        <div className='flex justify-center m-auto w-[80%] flex-wrap'>
        {
            
            result.map((pro,i)=>(
                <Card key={i} result={pro}/>
            ))
        }
        </div>     
    </div>
  );
}

export default page;
