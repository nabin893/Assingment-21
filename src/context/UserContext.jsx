import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';



// AUTH INIT
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext()

const UserContext = ({ children }) => {
   
    const [loading,setLoading] = useState(true)

   const [user, setUser] = useState({})
   // console.log(user);


// creat user
   const creatUser1 = (email, password) => {
 // loading
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

//  logIn 
   const loginUser = (email, password) => {
 // loading
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

//  logout
   const logout = () => {
      signOut(auth)
         .then(() => {
            toast("user loge out successfuiiy don")

         }).catch((error) => {
            console.log(error);

         });
   }

   //  sign IN with google
   const creatGoolAc = () => {
      return signInWithPopup(auth, googleprovider)

   }
   //  sign IN with github
   const creatGithubAc = () => {
      return signInWithPopup(auth, githubProvider)

   }
   //  update USER 
   const updateUser = (name, number) => {
      updateProfile(auth.currentUser, {
         displayName: name, phoneNumber: number,
      }).then(() => {
      }).catch((error) => {
      });
   }

    //   VERIFI USER
    const verifiUser = () => {
      return sendEmailVerification(auth.currentUser)
        
   }
   // forgat Password
   const forgPasword =(email)=>{
      return sendPasswordResetEmail(auth, email)
   }


   
// current User
   const currentUser1 = onAuthStateChanged(auth, currentUser => {
      console.log("observing user", currentUser);
// loading
      setLoading(false)
      setUser(currentUser)
      return () => {
         currentUser1 ()

      }
   },[])

   //   context loder
   const authInfo = {
      creatUser1,
      loginUser,
      user,
      logout,
      creatGoolAc,
      creatGithubAc,
      updateUser,
      verifiUser,
      forgPasword,
      loading,
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default UserContext;