import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className='my-12 py-12 px-8'>
            <div className='text-center space-y-3'>
                <h3 className='font-bold text-primaryColor'>Testimonial</h3>
                <h1 className='text-4xl font-bold'>What Customer Says</h1>
                <p className='text-textColor capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
           
            <div className='lg:flex space-y-8 lg:space-y-0 justify-between mt-10 gap-4'>
                <div className='px-4 py-8 rounded-lg border-t-2 shadow-lg space-y-3 '>
                    <div className='flex justify-between'>
                        <div className='flex space-x-3'>
                        <img src="/assets/images/core feature/Ellipse 2.svg" alt="" />
                            <div>
                            <h1 className='font-bold'>Awlad Hossain</h1>
                            <p className='text-textColor font-semibold'>Businessman</p>
                            </div>
                        </div>
                        <img src="/assets/images/core feature/quote 1.svg" alt="" />
                    </div>
                    <p className='text-textColor capitalize'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='flex text-xl text-orange-400'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
                </div>
                <div className='px-4 border-t-2 py-8 rounded-lg shadow-lg space-y-3 '>
                    <div className='flex justify-between'>
                        <div className='flex space-x-3'>
                        <img src="/assets/images/core feature/Ellipse 2 (1).svg" alt="" />
                            <div>
                            <h1 className='font-bold'>Awlad Hossain</h1>
                            <p className='text-textColor font-semibold'>Businessman</p>
                            </div>
                        </div>
                        <img src="/assets/images/core feature/quote 1.svg" alt="" />
                    </div>
                    <p className='text-textColor capitalize'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='flex text-xl text-orange-400'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;