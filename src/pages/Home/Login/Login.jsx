 
import { MdPassword } from 'react-icons/md';
import SocialAuth from '../SocialAuth/SocialAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MainNav from '../../shared/Navbar/MainNav';
import { useContext, useState } from 'react';
import { myContaxt } from '../../../contaxt/Contaxt';
import Swal from 'sweetalert2';

const Login = () => {
    const [type, setType] = useState(false);
    const {loginUser } = useContext(myContaxt)
    const handleType = () =>{
        setType(!type)
    }
     const location = useLocation();
      const navigate = useNavigate()
    const handleForm = (e) =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      loginUser(email, password)
      .then(res=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log in Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location?.state ? location?.state : '/')
      })
      .catch(error=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "email or password wrong !",
           
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
                <form onSubmit={handleForm }  className='border flex justify-center py-4 px-3 w-[80%]'>
                 <div className='space-y-4 w-full px-8'>
                 <h1 className='text-center text-2xl font-bold'>Login</h1>
                    <p className='font-bold'>Email</p>
                    <input required type="text" placeholder='Your email' name='email' className='w-full border outline-none px-3 py-2 rounded' />
                    <p className='font-bold'> Password</p>
                   <div className='flex items-center relative'>
                   <input required type={`${type?'text':'password'}`}placeholder='Password' name='password' className='w-full border outline-none px-3 py-2 rounded'
                     />
                     <span onClick={handleType} className='inline-bolck absolute -right-0  mr-1'><MdPassword/></span>
                   </div>
                    <button className='w-full rounded font-bold text-white bg-primaryColor py-2'> Log In</button>
                   <div className='text-center'>
                    <p>Or Sign In with</p>
                    <SocialAuth/>
                    <p>Do't Have an account? <Link
                    className='text-primaryColor font-bold'
                    to={'/signup'}>Sign Up</Link></p>
                   </div>
                 </div>
                </form>
               </div>
             </div>
            </div>
        </div>
    );
};

export default Login;