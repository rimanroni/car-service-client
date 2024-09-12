import React, { useState } from 'react';
import MainNav from '../../shared/Navbar/MainNav';
import { useLoaderData } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import axios from 'axios';
import Swal from 'sweetalert2';

const Pending = () => {
    const datas = useLoaderData();
    const [data, setData] = useState(datas)
  
    const updateData = (id, updatedOrder) => {
        axios.put(`http://localhost:4000/order/${id}`, updatedOrder)
          .then(res => {
             const id = res.data.modifiedCount;
              if(id>0){
                alert('aprove')
              }
          })
          .catch(error => console.log(error));
      };
      const deletOrder = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://localhost:4000/order/${id}`)
              .then((res) => {
                const delet = res.data.deletedCount;
                if (delet == 1) {
                  const newData = data.filter(item=>item._id !== id);
                  setData(newData)
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "try again ",
                   
                });
              });
          }
        });
      };
    return (
        <div>
            <MainNav/>
            {data?.length==0?<div className='h-screen flex justify-center items-center text-2xl font-bold text-red-500'>No Order Here..</div>:<div className='px-8 my-12'>
                  {data?.map((item, ind)=>(
                    <div key={ind} className='lg:flex justify-between  items-center gap-x-4 mt-10 '>
                       
                      <div className=' lg:flex items-center gap-x-3'>
                        <button onClick={()=>deletOrder(item._id)} className='p-3 rounded-full bg-[#444444] text-white'>
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
                      <button onClick={()=>updateData(item._id)} className={`${item.active?'border-[1px] rounded-md border-[#29B170] text-[#29B170]':'bg-[#FF3811] text-white '} p-2  rounded-md`} >{item.active?"Approved":"Pending"}</button>
                    </div>
                  ))}
                </div>}
                
        </div>
    );
};

export default Pending;