import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='  my-2 '>
            <div className="carousel w-full  ">
                {/*  carousel 1  */}
                <div id="item1" className="carousel-item w-full h-[90vh]">
                    <div className='text-white space-y-4 w-full flex flex-col justify-center  px-8'>
                        <h1 className='lg:text-5xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='font-[400]' >There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='lg:space-x-4'>
                            <button className='bg-[#FF3811]  p-4 rounded font-semibold' >Discover More</button>
                            <button className=' p-4 rounded font-semibold mt-2 bg-transparent border'>Latest Project</button>
                        </div>
                    </div>
                    <div className='flex w-full items-end     '>
                        <div className='flex px-4 my-4 w-full space-x-2 justify-end' >
                            <a href="#item4" className="bg-transparent border text-white rounded-full  p-4 h-[50px] w-[50px] "><FaArrowLeft /></a>
                            <a href="#item2" className=" bg-red-500 text-white rounded-full  p-4 h-[50px] w-[50px]  "><FaArrowRight className='' /></a>

                        </div>
                    </div>
                </div>
                {/* corusole 2 */}
                <div id="item2" className="carousel-item w-full h-[90vh]">
                <div className='text-white space-y-4 w-full flex flex-col justify-center  px-8'>
                        <h1 className='lg:text-5xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='font-[400]' >There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='lg:space-x-4'>
                            <button className='bg-[#FF3811]  p-4 rounded font-semibold' >Discover More</button>
                            <button className=' p-4 rounded font-semibold mt-2 bg-transparent border'>Latest Project</button>
                        </div>
                    </div>
                    <div className='flex w-full items-end     '>
                        <div className='flex px-4 my-4 w-full space-x-2 justify-end' >
                            <a href="#item1" className="bg-transparent border text-white rounded-full  p-4 h-[50px] w-[50px] "><FaArrowLeft /></a>
                            <a href="#item3" className="bg-red-500 text-white rounded-full  p-4 h-[50px] w-[50px]  "><FaArrowRight /></a>

                        </div>
                    </div>
                </div>
                {/* coursol 3 */}
                <div id="item3" className="carousel-item w-full h-[90vh]">
                <div className='text-white space-y-4 w-full flex flex-col justify-center  px-8'>
                        <h1 className='lg:text-5xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='font-[400]' >There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='lg:space-x-4'>
                            <button className='bg-[#FF3811]  p-4 rounded font-semibold' >Discover More</button>
                            <button className=' p-4 rounded font-semibold mt-2 bg-transparent border'>Latest Project</button>
                        </div>
                    </div>
                    <div className='flex w-full items-end     '>
                        <div className='flex px-4 my-4 w-full space-x-2 justify-end' >
                            <a href="#item2" className="bg-transparent border text-white rounded-full  p-4 h-[50px] w-[50px]"><FaArrowLeft /></a>
                            <a href="#item4" className="bg-red-500 text-white rounded-full  p-4 h-[50px] w-[50px]   "><FaArrowRight /></a>

                        </div>
                    </div>
                </div>
                {/* coursole 4  */}
                <div id="item4" className="carousel-item w-full h-[90vh]">
                <div className='text-white space-y-4 w-full flex flex-col justify-center  px-8'>
                        <h1 className='lg:text-5xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='font-[400]' >There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className='lg:space-x-4'>
                            <button className='bg-[#FF3811]  p-4 rounded font-semibold' >Discover More</button>
                            <button className=' p-4 rounded font-semibold mt-2 bg-transparent border'>Latest Project</button>
                        </div>
                    </div>
                    <div className='flex w-full items-end     '>
                        <div className='flex px-4 my-4 w-full space-x-2 justify-end' >
                            <a href="#item3" className="bg-transparent border text-white rounded-full  p-4 h-[50px] w-[50px]"><FaArrowLeft /></a>
                            <a href="#item1" className="bg-red-500 text-white rounded-full  p-4 h-[50px] w-[50px]   "><FaArrowRight /></a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;