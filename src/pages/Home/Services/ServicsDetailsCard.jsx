import React from 'react';

const ServicsDetailsCard = ({loadedData}) => {
    const {img , title ,description ,facility} = loadedData;
  
    return (
        <div className='px-4 py-2' >
            <div className='space-y-3'>
            <img src={img} className='w-full h-[400px]' alt="" />
            <h1 className='font-bold text-2xl'>{title}</h1>
            <p>{description}</p>
            </div>
            
            <div className='grid py-8 grid-cols-1 lg:grid-cols-2 gap-4 mt-4 '>
                {facility?.map((item)=><div 
                 className='border-t bg-[#F3F3F3] border-0.5 px-4 py-3 space-y-2 rounded-lg border-primaryColor'
                key={item.name}>
                    <h1>{item.name}</h1>
                    <p>{item.details}</p>
                </div>)}
            </div>
            <div className='space-y-3'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                <h1 className='text-2xl font-bold'>3 Simple Steps to Process</h1>
                <div className="grid mt-6 grid-cols-1 gap-2 lg:grid-cols-3">
                    <div className='border space-y-4 p-4 text-center'>
                    <div className='flex justify-center'>
                        <div className='p-4 bg-[#FFEBE7] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <div className=' bg-[#FF3811] rounded-full flex justify-center items-center font-bold text-white w-[60px] h-[60px] px-4'>
                                01
                            </div>
                        </div>
                        </div>
                        <h1 className='font-bold'>Step One</h1>
                        <p>It uses a dictionary of over 200 .</p>
                    </div>
                    <div className='border space-y-4 p-4 text-center'>
                    <div className='flex justify-center'>
                        <div className='p-4 bg-[#FFEBE7] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <div className=' bg-[#FF3811] rounded-full flex font-bold justify-center items-center text-white w-[60px] h-[60px] px-4'>
                                02
                            </div>
                        </div>
                        </div>
                        <h1 className='font-bold'>Step Two</h1>
                        <p>It uses a dictionary of over 200 .</p>
                    </div>
                    <div className='border space-y-4 p-4 text-center'>
                        <div className='flex justify-center'>
                        <div className='p-4 bg-[#FFEBE7] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <div className=' bg-[#FF3811] rounded-full w-[60px] h-[60px] px-4 flex font-bold justify-center items-center text-white'>03</div>
                        </div>
                        </div>
                        <h1 className='font-bold'>Step Three</h1>
                        <p>It uses a dictionary of over 200 .</p>
                    </div>
                </div>
            </div>

            <div id='videoBanner' className='flex h-[400px] justify-center items-center'>
                  <img src="/Frame.svg" alt="" />
            </div>
        </div>
    );
};

export default ServicsDetailsCard;