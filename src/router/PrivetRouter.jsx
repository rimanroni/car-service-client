import React, { useContext } from 'react';
 
import { Navigate , useLocation} from 'react-router-dom';
import { myContaxt } from '../contaxt/Contaxt';

const PrivetRouter = ({children}) => {
    const {user,  loading} = useContext(myContaxt);
    const location = useLocation();
    console.log(location);
     if(loading) {
         return <div className='h-screen flex items-center justify-center'>Loading...</div>
     }
     if(user){
        return children;
     }
    return (
        <div>
            <Navigate state={location.pathname} to={'/login'} replace></Navigate>
        </div>
    );
};

export default PrivetRouter;