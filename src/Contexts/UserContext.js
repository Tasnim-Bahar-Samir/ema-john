import React, { createContext } from 'react'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.init';

export const userAuth = createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSignIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const user = {name:'samir'}
    const userInfo = {user,createUser,userSignIn}

  return (
    <userAuth.Provider value={userInfo}>
        {children}
    </userAuth.Provider>
  )
}

export default UserContext