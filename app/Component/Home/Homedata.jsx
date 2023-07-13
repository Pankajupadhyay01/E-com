import Card from './Card';

const fetchfunc = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=50");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const result = await res.json();
  return result.products;
}

const Homedata = async () => {
  const result = await fetchfunc();
  return (
    <div>
      <div className='flex justify-center m-auto w-[80%] flex-wrap'>
        <span className="text-[20px] md:text-[40px] relative font-[600] before:absolute before:h-[2px] before:w-[80%] before:content-[''] cursor-pointer before:bottom-0 before:bg-blue-500">
          Explore Product
        </span>
      </div>

      <div className='flex justify-center m-auto w-[80%] flex-wrap'>
        {
          result.map((pro, i) => (
            <>
            
              <Card key={i} result={pro} />

            </>

          ))
        }
      </div>

    </div>
  )
}

export default Homedata;