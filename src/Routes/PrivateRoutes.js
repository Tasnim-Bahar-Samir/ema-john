import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { userAuth } from '../Contexts/UserContext'

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(userAuth);
    const location = useLocation();

    if(loading){
        return <div>loading...</div>
    }

    if(user?.uid){
        return children;
    }
  return <Navigate to='/signin' state={{from:location}} replace></Navigate>
}

export default PrivateRoutes;