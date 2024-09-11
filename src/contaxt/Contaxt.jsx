import { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const myContaxt = createContext(null);

const Contaxt = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //  create user 
    const createUser = (email, password) =>{ 
      setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    // log out user 
    
    // Log in user 
    const loginUser = (email, password) =>{
      setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    }
    

    useEffect(()=>{
    const myAuth = onAuthStateChanged(auth, currentUser=>{
         setUser(currentUser)
         setLoading(false)
         
   })

     return ()=>(
        myAuth()
     )
   },[])
   const info = {user,createUser , loginUser  , loading}
    return (
        <myContaxt.Provider value={info}>
            {children}
        </myContaxt.Provider>
    );
};

export default Contaxt;