import React, { useContext } from 'react';
 
import { Navigate } from 'react-router-dom';
import { myContaxt } from '../contaxt/Contaxt';

const PrivetRouter = ({children}) => {
    const {user,  loading} = useContext(myContaxt)
     if(loading) {
         return <div className='h-screen flex items-center justify-center'>Loading...</div>
     }
     if(user){
        return children;
     }
    return (
        <div>
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default PrivetRouter;