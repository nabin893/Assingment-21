import React, {useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({Children}) => {
   const {user,loading} = useContext(AuthContext)
   const location = useLocation()

   if(loading){
    return <p  className='text-3xl text-red-600 font-bold'> loading...........</p>
   }
   
   if(user && user?.uid){
    return Children
   }
   return <Navigate to={"/sineIn"} state={{form:location}} replace></Navigate>
};

export default PrivateRoutes;