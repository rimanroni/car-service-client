import React from 'react';
 
import { Link, useLoaderData } from 'react-router-dom';
 
 
 
import MainNav from '../../shared/Navbar/MainNav';
import SiderCard from './SideCard';
import ServicsDetailsCard from './ServicsDetailsCard';
import Footer from '../../shared/Footer/Footer';

const ServicesDetails = () => {
    const loadedData = useLoaderData();
    const {price , _id} = loadedData;
   
    return (
        <div>
            <div className='pb-12'>
            
            <div className='px-8'>
                <MainNav/>
               <div className='px-8 space-y-8 pt-12 text-white' id='bannerDetails'>
                  <h1 className='text-4xl'>Service Details</h1> <br />
                  <br />
                  <br />
                  <br />
                  <br />
                   <div className='flex justify-center    font-bold '>
                  <button className='bg-primaryColor px-4 mt-5 py-2 rounded mb-2'><Link to={'/'}>Home</Link> / Service Details</button>
                  </div>
               </div>
             
 
             </div>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8  px-8 lg:grid-cols-3'>
             <div className='col-span-2 '>
                <ServicsDetailsCard loadedData={loadedData}/>
             </div>
             <div className=''>
                <SiderCard _id={_id} price={price}/>
             </div>
             </div>
        </div>
        <Footer/>
        </div>
    );
};

export default ServicesDetails;