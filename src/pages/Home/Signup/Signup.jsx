import React, { useContext, useState } from 'react';
import { MdPassword } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialAuth from '../SocialAuth/SocialAuth';
import MainNav from '../../shared/Navbar/MainNav';
import { myContaxt } from '../../../contaxt/Contaxt';
import Swal from 'sweetalert2';

const Signup = () => {
    const [type, setType] = useState(false);
    const {createUser } = useContext(myContaxt);
    const location = useLocation();
    const navigate = useNavigate()
    const handleType = () =>{
        setType(!type)
    }
    const handleForm = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(res=>{
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign Up   Successfully",
            showConfirmButton: false,
            timer: 1500,
            
          });
          form.reset();
          navigate(location?.state ? location?.state : '/')
          
        })
        .catch(erro=>{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
      
          });
          
        })
    }
    return (
        <div>
            <MainNav/>
            <div className='px-8 py-3'>
             <div className='mt-4 grid grid-cols-1
             lg:grid-cols-2 gap-6
             rounded-lg'>
               <div>
                <img src="/assets/images/login/login.svg" alt="login" className='w-1/2 lg:w-[65%] mx-auto' />
               </div>
               <div className='flex justify-center '>
                <form  onSubmit={handleForm}  className='border flex justify-center py-4 px-3 w-[80%]'>
                 <div className='space-y-4 w-full px-8'>
                 <h1 className='text-center text-2xl font-bold'>Sing Up</h1>
                    <p className='font-bold'>Name</p>
                    <input required  type="text" placeholder='Your Name' name='name' className='w-full border outline-none px-3 py-2 rounded' />
                    <p className='font-bold'>Email</p>
                    <input required type="text" placeholder='Your email' name='email' className='w-full border outline-none px-3 py-2 rounded' />
                    <p className='font-bold'> Password</p>
                   <div className='flex items-center relative'>
                   <input required minLength={8} type={`${type?'text':'password'}`}placeholder='Password' name='password' className='w-full border outline-none px-3 py-2 rounded'
                     />
                     <span onClick={handleType} className='inline-bolck absolute -right-0  mr-1'><MdPassword/></span>
                   </div>
                    <button className='w-full rounded font-bold text-white bg-primaryColor py-2'> Sing Up</button>
                    <p className='text-center'>Or Sign Up with</p>

                   <div className='text-center'>
                    <SocialAuth/>
                    <p> Have an account? <Link
                    className='text-primaryColor font-bold'
                    to={'/login'}>Log In</Link></p>
                   </div>
                 </div>
                </form>
               </div>
             </div>
            </div>
        </div>
    );
};

export default Signup;