import React from 'react';
import Card from '@/app/Component/Home/Card';
async function fetchurl(name) {
    if (name==undefined) {
        console.log("ok");
    }
    if(name.length==0){
        alert("ok")
    }
    else{
       const res = await fetch(`https://dummyjson.com/products/search?q=${name}`);
        const result = await res.json();
        return result.products; 
    }  
    
}
const page =async ({params:{ name }}) => { 
        const result= await fetchurl(name);  
  return (
    <div>  
        <div className='flex justify-center m-auto w-[80%] flex-wrap'>
        {
            
            result.map((pro,i)=>(
                <Card key={i} title={pro.title} id={pro.id} img={pro?.images[0]} price={pro.price} rating={pro.rating}/>
            ))
        }
        </div>     
    </div>
  );
}

export default page;
