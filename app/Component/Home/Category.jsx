'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from "next/link";

const Category = () => {
  const list = [
    {
      img: "text",
      name: "smartphones"
    },
    {
      img: "text",
      name: "laptops"
    },
    {
      img: "text",
      name: "womens-dresses"
    },
    {
      img: "text",
      name: "womens-shoes"
    },
    {
      img: "text",
      name: "mens-shirts"
    },
    {
      img: "text",
      name: "womens-jewellery"
    },
    {
      img: "text",
      name: "mens-watches"
    },
    {
      img: "text",
      name: "womens-watches"
    },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (

    <>

      <div className='md:hidden my-6'>
        <Carousel responsive={responsive}>
          {
            list.map((pro, i) => (
              <Link href={`/category/detail/${pro.name}`}>
                <div className="flex items-center m-auto justify-center w-[71px] h-[71px] rounded-[20px] bg-gray-300">{pro.img}</div>
                <div className="flex justify-center items-center text-center text-blue-500 capitalize font-semibold ">{pro.name}</div>
              </Link>
            ))
          }

        </Carousel>
      </div>

      <div className='hidden md:flex m-auto w-[90%] flex-wrap '>
        {
          list.map((pro, i) => (

            <div className='my-[20px] flex flex-col justify-between m-auto md:w-[calc(25%-20px)] xl:w-[calc(13%-20px)] items-center flex-wrap overflow-hidden'>
              <Link href={`/category/detail/${pro.name}`}>
                <div className="flex items-center m-auto justify-center w-[71px] h-[71px] rounded-[20px] bg-gray-300">{pro.img}</div>
                <div className="flex justify-center items-center text-blue-500 capitalize font-semibold ">{pro.name}</div>
              </Link>
            </div>

          ))
        }

      </div>
    </>
  );
}

export default Category;
