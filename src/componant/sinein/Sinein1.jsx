import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {  signInWithEmailAndPassword, } from "firebase/auth";

import { AuthContext } from '../../context/UserContext';







const SineIN = () => {

     const {loginUser} = useContext(AuthContext)
       console.log(loginUser);

    // const[regUser,setregUser]= useState({})
    // // console.log(regUser);
    

    const handelLoUser = (e) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser( email, password) 
            .then(reg => {
                const logUser = reg.user;
                form.reset()
                if(logUser.uid){
                    alert("user logein successfuiiy don")
                }

            
            })
            .catch(error => {
                console.log(error);
                
              
            });
        } 
    return (
        <div> 
           
            <form  onSubmit={handelLoUser } className='h-[100vh] flex justify-center items-center'>
                <div className="card bg-sky-300 w-[600px] h-[400px] shrink-0 shadow-2xl">
                    <div className="card-body">

                        <label className="fieldset-label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />

                        <label className="fieldset-label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />

                        <div className='flex justify-between'>
                            <a className="link link-hover text-xl">Forgot password?</a>
                            <a className="link link-hover text-xl"><Link to="/sineUp"> Create a account?</Link></a>
                        </div>

                        <button className="btn btn-neutral mt-4">LogIn</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SineIN;