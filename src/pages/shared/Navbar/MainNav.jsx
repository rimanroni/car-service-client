import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { myContaxt } from "../../../contaxt/Contaxt";
import { auth } from "../../../FirebaseConfig";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

 

const MainNav = () => {
    const {user  } = useContext(myContaxt);
  
    const navItems = [
        {title:'Home',link:"/"},
        {title:'About',link:"/about"},
        {title:'Services',link:"/services"},
        {title:'Blog ',link:"/blog"},
        
     ];
     const handleLogout = () =>{
        signOut(auth).then(() => {
            // 
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign-out successful.",
                showConfirmButton: false,
                timer: 1500
              });
            
          }).catch((error) => {
            // 
            alert('An error happened.')
          });
     }
    return (
        <div className=' '>
        <div className='lg:px-8 px-4 flex  mt-2 justify-between items-center'>
           <div>
              <NavLink to={'/'}> <img src="/assets/logo.svg" className='lg:w-10/12 w-1/2' alt="" /></NavLink>
           </div>
           <div className={`  lg:flex items-center`}>
               <ul className='flex relative text-[13px] lg:space-x-4 space-x-5 px-4  lg:text-[18px] lg:mr-0 mr-4 font-semibold '>
                   {navItems.map((item)=><li
                   className='relative overflow-hidden group '
                   key={item.title}>
                     <NavLink to={item.link}>{item.title}</NavLink>
                    <span className='bg-red-400 absolute w-full group-hover:translate-x-0 -left-20 top-6 h-2 duration-500 group-hover:left-0  inline-block'></span>
                   </li>)}
                   {user?.email&& user?.email !== 'admin@gmail.com' && <li className="flex relative text-[13px]   lg:text-[18px]  font-semibold"><Link to={'/order'} className="relative overflow-hidden group">Order <span className='bg-red-400 absolute w-full group-hover:translate-x-0 -left-[125px] top-6 h-2 duration-500 group-hover:left-0  inline-block'></span></Link></li>}

                   <li className="flex relative text-[13px]   lg:text-[18px]  font-semibold">
              {user?.email==="admin@gmail.com" &&
                 <Link to={'/addProduct' } className="relative overflow-hidden group">Add Product   <span className='bg-red-400 absolute w-full group-hover:translate-x-0 -left-[125px] top-6 h-2 duration-500 group-hover:left-0  inline-block'></span></Link>}
              </li>
                   <li className="flex relative text-[13px]   lg:text-[18px]  font-semibold">
              {user?.email==="admin@gmail.com" &&
                 <Link to={'/pendingOrder' } className="relative overflow-hidden group">Pending Order  <span className='bg-red-400 absolute w-full group-hover:translate-x-0 -left-[125px] top-6 h-2 duration-500 group-hover:left-0  inline-block'></span></Link>}
              </li>
               </ul>

             
           </div>
           <div className='relative'>
              <button className=' border-[#FF3811] border  lg:px-4 mr-4 py-1 lg:mr-0  w-[120px] lg:py-3 rounded-lg text-[#FF3811]  text-[12px]lg:font-semibold'>
                    {user?<p onClick={handleLogout}>Log Out</p>: <NavLink to={'/login'}>Appointment</NavLink>}
               </button>
           </div>
       </div>
   </div>
    );
};

export default MainNav;
