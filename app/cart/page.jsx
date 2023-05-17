 
async function fetchurl() {

       const res = await fetch(`https://dummyjson.com/carts/user/5`);
        const result = await res.json();
        return result.carts; 
    
}
const page =async () => { 
        const result= await fetchurl();  
  return (
    <div>  
        <div className='flex justify-center m-auto w-[80%] flex-wrap'>
        {
            
            result.map((pro,i)=>(
                 <h1>{pro.id}</h1>
            ))
        }
        </div>     
    </div>
  );
}

export default page;
