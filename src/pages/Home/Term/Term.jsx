import React, { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Term = () => {
    const datas = [
        
        
        {
         product:"Car Engine Plug", 
         img:"/assets/images/team/3.jpg",
         name:"Engine Expert", 
         link:  <div className='flex gap-x-2'>
            <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/     ></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
         </div>
        },
        {
         product:"Car Engine Plug", 
         img:"/assets/images/team/2.jpg",
         name:"Engine Expert", 
         link:  <div className='flex gap-x-2'>
            <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/     ></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
         </div>
        },
        {
         product:"Car Engine Plug", 
         img:"/assets/images/team/1.jpg",
         name:"Engine Expert", 
         link:  <div className='flex gap-x-2'>
            <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/     ></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
         </div>
        },

    ]
const sliders = ['','', '']
    return (
        <div className="my-12">
            <div className='text-center space-y-3'>
                <h2 className='font-bold text-primaryColor'>Team</h2>
                <h1 className='text-4xl font-bold'>Meet Our Team</h1>
                <p className='capitalize text-textColor'>
                    The majority have suffered alteration in some form, by injected humour, or randomised
                    <br /> words which don't look even slightly believable.
                </p>
            </div>
            <div className='px-8 m-6 flex justify-center items-center lg:h-[400px]'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className=" flex flex-col justify-center   lg:h-[400px]  "
                >
                    
                    {sliders.map((item, indx) => (
                        <SwiperSlide key={indx} className="w-full h-full  ">
                           <div className='grid   justify-center items-center grid-cols-1 lg:grid-cols-3 lg:h-[400px] gap-4 px-12'>
                             {datas.map((item, indx)=>(
                                 <div className="flex rounded-lg shadow-md p-4 border flex-col items-center justify-center">
                                 <img src={item.img} alt={item.name} className="w-32 h-32 rounded-full mb-4" />
                                 <h3 className="font-bold">{item.name}</h3>
                                 <p>{item.product}</p>
                                 <div className="flex space-x-2 mt-2">
                                     {item.link}
                                 </div>
                             </div>
                             ))}
                           </div>
                           
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Term;
