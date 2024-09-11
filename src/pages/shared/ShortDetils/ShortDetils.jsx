import React from 'react';

const ShortDetails = () => {
    return (
        <div className='flex   my-12 justify-center items-center align-middle'>
            <div className='bg-[#151515] rounded-md py-12 space-y-6 lg:space-y-0 px-8 text-white grid grid-cols-1 lg:grid-cols-3 w-full'>
                 <div className='flex px-4 space-x-4 items-center '>
                    <img src="/1.png" className='w-[30px] h-[30px] ' alt="" />
                    <div>
                        <p className='font-[500]'>We are open monday-friday</p>
                        <h1 className='text-2xl font-bold'>7:00 am - 9:00 pm</h1>
                    </div>
                 </div>
                 <div className='flex px-4 space-x-4 items-center '>
                    <img src="/2.png" alt="" />
                    <div>
                        <p className='font-[500]'>Have a question?</p>
                        <h1 className='text-2xl font-bold'>+2546 251 2658</h1>
                    </div>
                 </div>
                 <div className='flex px-4 space-x-4 items-center '>
                    <img src="/3.png" alt="" />
                    <div>
                        <p className='font-[500]'>Need a repair? our address</p>
                         <h1 className='text-2xl font-bold'>Liza Street, New York</h1>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default ShortDetails;