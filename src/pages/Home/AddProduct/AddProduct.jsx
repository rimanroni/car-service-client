import React from 'react';
import MainNav from '../../shared/Navbar/MainNav';
import { Link } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import axios from 'axios';

const AddProduct = () => {
    const handleForm = (e) =>{
     e.preventDefault();
     const form = e.target;
     const title = form.name.value;
     const price = form.price.value;
     const text = form.text.value; 
     const img = form.imgURL.value;
     const message = form.message.value;
     const product = {title, price, text, img , message};
     axios.post('http://localhost:4000/services', product) 
     .then(res=>{
        const id = res.data.insertedId;
        if(id){
            alert('product done ')
            form.reset();
        }
     })
     .catch(err=>alert('try again'))

    }
    
    return (
        <div>
            <MainNav/> 
            <div className="px-8  ">
            <div id='bannerDetails' className='px-4 relative'>
                <h1 className='text-2xl font-bold lg:text-4xl text-white relative top-[100px]'>Add New Service</h1>
                <div className='absolute bottom-0 left-[580px]  '>
                    <button className='bg-primaryColor font-bold py-2 px-4 rounded text-white'><Link  to={'/'}>Home</Link> / Service</button>
                    </div>
            </div>
            </div>

            <div className='flex mt-10 py-8 justify-center px-8'>
                <div className='bg-[#F3F3F3] w-full p-4'>
                  <form onSubmit={handleForm}  className='w-full space-y-3'>
                   <div className='w-full lg:flex  lg:space-y-0  space-y-2  gap-4'>
                    <input type="text" required placeholder='Service Name' name='name' className='w-full px-4 py-2 outline-none rounded'  />
                    <input type="text"  required className='w-full px-4 py-2 outline-none rounded'  name='price' placeholder='Service Price'  />
                   </div>
                   <div className='lg:flex   lg:space-y-0  space-y-2 gap-4'>
                    <input required type="text" placeholder='Text here' name='text' className='w-full px-4 py-2 outline-none rounded'/>
                    <input type="text"     name='service' className='w-full px-4 py-2 bg-white    outline-none rounded' placeholder='Service Type'/>
                   </div>
                   <div>
                   <input required type="text" placeholder='Image URl' name='imgURL' className='w-full px-4 py-2 outline-none rounded'/>
                   </div>
                   <div>
                    <textarea required placeholder='Product Description' className='w-full px-4 py-2 outline-none rounded resize h-[100px]' name='message' ></textarea><br />
                    <button className='w-full bg-primaryColor py-2 text-white font-bold rounded mt-2'>Add Product</button>
                   </div>
                  </form>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AddProduct;