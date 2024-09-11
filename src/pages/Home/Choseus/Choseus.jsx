import React from 'react';

const ChooseUs = () => {
    return (
        <div className='my-12 py-12 px-8'>
            <div className='text-center space-y-3'>
                <h1 className='text-primaryColor font-bold'>Core Features</h1>
                <h1 className='text-4xl font-bold'>Why Choose Us</h1>
                <p className='text-textColor capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable. </p>
            </div>
            <div className='grid mt-8 grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-6'>
               <div className='border text-center space-y-3 shadow-lg rounded-md p-4'>
               <img src="/assets/images/core feature/1.svg" alt="chooseUs" className='mx-auto' />
               <h1 className='font-bold'>Expert Team</h1>
               </div>
               <div className='bg-primaryColor text-white p-4 space-y-3 text-center border shadow-lg rounded-md'>
               <img src="/assets/images/core feature/2.svg" alt="chooseUs" className='mx-auto' />
                <h1 className='font-bold'>Timely Delivery</h1>
               </div>
               <div className='border space-y-3 text-center p-4 shadow-lg rounded-md'>
               <img src="/assets/images/core feature/3.svg" alt="chooseUs" className='mx-auto' />
               <h1 className='font-bold'>24/7 Support</h1>
               </div>
               <div className='border space-y-3 text-center p-4 shadow-lg rounded-md'>
               <img src="/assets/images/core feature/4.svg" alt="chooseUs" className='mx-auto' />
               <h1 className='font-bold'>Best Equipment</h1>
               </div>
               <div className='border text-center space-y-3 p-4 shadow-lg rounded-md'>
               <img src="/assets/images/core feature/5.svg" alt="chooseUs" className='mx-auto'/>
               <h1 className='font-bold'>100% Guranty</h1>
               </div>
               <div className='border text-center space-y-3 p-4 shadow-lg rounded-md'>
               <img src="/assets/images/core feature/6.svg" alt="chooseUs" className='mx-auto' />
               <h1 className='font-bold'>Timely Delivery</h1>
               </div>
            </div>
        </div>
    );
};

export default ChooseUs;