import React, { useContext, useEffect, useState } from 'react';
import MainNav from '../../shared/Navbar/MainNav';
import { myContaxt } from '../../../contaxt/Contaxt';
import { ImCross } from "react-icons/im";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Order = () => {
    const {user} = useContext(myContaxt)
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:4000/order?email=${user?.email}`)
       .then(res=>res.json())
       .then(data=>setData(data))
   },[user]);
    console.log(data);
    return (
        <div>
            <MainNav/>
            {data?.length==0?<div className='h-screen flex justify-center items-center text-2xl font-bold text-red-500'>No Order Here..</div>:<div className='px-8 my-12'>
                  {data?.map((item, ind)=>(
                    <div key={ind} className='lg:flex justify-between  items-center gap-x-4 mt-10 '>
                       
                      <div className=' lg:flex items-center gap-x-3'>
                        <button className='p-3 rounded-full bg-[#444444] text-white'>
                        <ImCross />
                        </button>
                        <img src={item.img} className='w-[200px] border-2 border-[#444444] rounded-md' alt="" />
                        <div className='space-y-1  '>
                            <h1>{item.title}</h1>
                            <h1>Order Time : {item.orderTime}</h1>
                            <h1>Contact : {item.phone}</h1>
                            <p>Order Email : {item.email}</p>
                        </div>
                      </div>
                      <p className='font-bold'>Price : {item.price}</p>
                      <p>Services Date : {item.date}</p>
                      <p className={`${item.active?'border-[1px] rounded-md border-[#29B170] text-[#29B170]':'bg-[#FF3811] text-white '} p-2  rounded-md`} >{item.active?"Approved":"Pending"}</p>
                    </div>
                  ))}
                </div>}
               {
                data.length>0 &&  <div className='flex my-8 justify-between items-center px-8'>
                <Link to={'/services'} className='flex items-center gap-x-1 font-medium text-[#444444]'> <RiArrowGoBackLine /> Continue Shopping</Link>
                <div className='flex items-center gap-x-1 font-medium text-[#444444]'><MdDelete /> Clear Shopping Cart</div>
            </div>
               }
        </div>
    );
};

export default Order;