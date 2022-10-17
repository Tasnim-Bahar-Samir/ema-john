import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.init';

export const userAuth = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user,setUser] = useState({})
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSignIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
      
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        console.log(currentUser)
      })
    
      return () => {
        unSubscribe();
      }
    }, [])
    

    const userSignout = ()=>{
      signOut(auth);
    }

    
    const userInfo = {user,createUser,userSignIn,userSignout}

  return (
    <userAuth.Provider value={userInfo}>
        {children}
    </userAuth.Provider>
  )
}

export default UserContext