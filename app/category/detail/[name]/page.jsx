import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Category from '@/app/Component/Home/Category';
import Card from '@/app/Component/Home/Card';
async function categoryfunc(name) {
    const res = await fetch(`https://dummyjson.com/products/category/${name}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const result = await res.json();
    return result.products;
}
const page = async ({ params: { name } }) => {
    const result = await categoryfunc(name);
    return (
        <div>
            <Category/>

            <div className=" flex m-auto mb-[20px] h-[30vh] w-[100%] object-cover">
                <Image className="w-full h-full" src="/catbanner.jpg" width={1500} height={1000} />
            </div>

            <div className='w-[90%] m-auto flex md:text-xl text-lg text-gray-800 underline capitalize'>
                <Link href="/">Category</Link>/{name}
            </div>
            
            <div className='mt-[10px] flex justify-center m-auto w-[80%] flex-wrap'>
            {
                result.map((pro,i)=>(
                    <Card result={pro}/>
                ))
            }
            </div>
        </div>
    );
}

export default page;
