import React from 'react';

const About = () => {
    return (
        <div className='grid px-8 my-20 gap-4 grid-cols-1 lg:grid-cols-2'>
            <div className='relative'>
                <img src="/assets/images/about_us/person.jpg" alt="aboutPerson" className='relative w-[95%]' />
                <img src="/assets/images/about_us/parts.jpg" alt="" className='absolute w-[256px] bottom-0 left-[180px] md:left-[550px] lg:left-[390px]  '  />
            </div>
            <div className='md:px-4 space-y-4'>
                <h1 className='font-bold text-primaryColor' >About Us</h1>
                <div className='space-y-5'>
                <h1 className='text-2xl lg:text-4xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h1>
                <p className="text-textColor font-[400]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-textColor'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='px-8 py-3 rounded-lg text-white  font-[500] bg-primaryColor'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About ;