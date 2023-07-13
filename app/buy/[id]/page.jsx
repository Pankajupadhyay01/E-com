import React from 'react'; 
import Link from 'next/link';
 
const page =  ({ params: { id } }) => {
  return (
    <div className=''>
      <div className='flex my-4 flex-col md:flex-row w-[90%] md:w-[80%] justify-between m-auto items-center'>
        <div className='md:w-[60%] overflow-hidden'>
           <div className='bg-white flex flex-col'>
              Oops,Not Implemented Yet !
             <Link href="/" className='font-blue-400 font-semibold'> -- Back To Home  </Link> 
           </div>
        </div>
        <div className='md:w-[35%] space-y-4'>
            <div className='space-y-5'> 
                <div className='text-gray-500 text-[30px] font-semibold'>Price Details</div>
                <div className='flex justify-between'>
                  <div className='text-[20px] font-normal'>Price</div>
                  <div className='text-green-500 text-[15px]'>$549</div>
                </div>
                <div className='flex justify-between boder-b-4'>
                  <div className='text-[20px] font-normal'>Delivery Charges</div>
                  <div className='text-green-500 text-[15px]'>Free</div>
                </div >
                <div className='flex justify-between'>
                  <div className='text-[20px] font-normal'>Total Payable</div>
                  <div className='text-green-500 text-[15px]'>$549</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
