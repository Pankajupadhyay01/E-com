import React from 'react';
import Card from '@/app/Component/Home/Card';
async function fetchurl(name) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${name}`);
    const result = await res.json();
    if (result==undefined) {
        console.log("null");
    }
    return result.products;
   
    
}
const page =async ({params:{ name }}) => { 
        const result= await fetchurl(name);  
  return (
    <div>  
        {
            result.map((pro,i)=>(
                <Card key={i} title={pro.title} id={pro.id} img={pro?.images[0]} price={pro.price} rating={pro.rating}/>
            ))
        }     
    </div>
  );
}

export default page;
