import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ServicesCard = ({item}) => {
    const {img, title , price , _id} = item;
    return (
        <div className='border rounded-lg mt-5'>
            <div className='p-4 space-y-3'>
                <img src={img} alt="productimg" className='mx-auto rounded-lg h-[200px] w-[414px]' />
                <h1 className='text-xl  font-bold'>{title}</h1>
                <div className='flex justify-between  items-center text-primaryColor'>
                    <h1 className='font-bold '>{price}</h1>
                   <NavLink to={`/services/${_id}`} > <span><FaArrowRight /></span></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;