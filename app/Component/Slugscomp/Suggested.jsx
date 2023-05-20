import Card from "../Home/Card";
const categoryfetch = async (category) => {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  await new Promise((resolve) => setTimeout(resolve,1000));
  const result = await res.json();
  return result.products;
}
const Suggested = async ({category}) => {
  const result = await categoryfetch(category);
  return (
    <div>
      <div className="w-[80%] m-auto flex items-center my-[20px]">
        <span className="text-[20px] md:text-[40px] relative font-[600] before:absolute before:h-[2px] before:w-[80%] before:content-[''] cursor-pointer before:bottom-0 before:bg-blue-500">Similar Product</span>
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
  );
}

export default Suggested;
