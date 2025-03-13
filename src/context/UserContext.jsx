import React, { createContext  } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


// AUTH INIT
const auth = getAuth(app);

export const AuthContext = createContext()

const UserContext = ({children}) => {

    const [user,setUser]=useState({})
    console.log(user);
    

    // creat user
 const creatUser1 =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 } 
//  logIn 
 const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
 }

 const currentUser1 = onAuthStateChanged(auth, currentUser => {
    console.log("observing user", currentUser);
    
    setUser(currentUser)

 })


 const authInfo ={
    creatUser1,
    loginUser,
    user,
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;