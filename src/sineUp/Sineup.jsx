import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlus } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../context/UserContext';






const Sineup = () => {

   const {creatUser1,creatGoolAc,creatGithubAc} = useContext(AuthContext)
   console.log(creatUser1);
   

//  state   
    const[regUser,setregUser]= useState({})
    // console.log(regUser);
    

    const handelCaUser = (e) => {
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const number = form.number.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(FirstName, LastName, Number, Email, Password);
        
        creatUser1(email, password)
            .then(reg => {
                const regUser = reg.user;
                setregUser(regUser)
                form.reset()
                if(regUser.uid){
                    alert("user created successfuiiy don")
                }
                
            })
            .catch(error => {
                console.log(error);  
            });
    }
    const signUpGoogle=()=>{
        creatGoolAc()     
    }
    const signUpGithuble=()=>{
        creatGithubAc()
        
          
    }




    return (
        <div>
            <div>
                <h1>{regUser.email}</h1>
                <h1>{regUser.uid}</h1>
                <form onSubmit={handelCaUser} className='h-[100vh] flex justify-center  items-center'>
                    <div className="card bg-sky-300 w-[600px] h-[700px] shrink-0 shadow-2xl">
                        <div className="card-body">
                            <label className="fieldset-label">First Name</label>
                            <input name="firstName" type="text" className="input" placeholder="Enter  First Name" />

                            <label className="fieldset-label">Last Name</label>
                            <input name="lastName" type="text" className="input" placeholder="Enter  Last Name" />

                            <label className="fieldset-label">Phoonnumber</label>
                            <input name="number" type="number" className="input" placeholder="Enter  Phoonnumber" />

                            <label className="fieldset-label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Enter  Email" />

                            <label className="fieldset-label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Enter  Password" />


                            <div >
                                <a className="link link-hover text-xl"><Link to="/sineIn" > Already have account?</Link></a>

                            </div>

                            <button className="btn btn-neutral mt-4" type="submit" valu="register">SignUp</button>
                            
                             <div className='flex justify-between'>
                                <button className="btn btn-neutral mt-4" onClick={()=> signUpGoogle()}>Continue with Google <FaGooglePlus className='text-2xl' /></button>
                                
                                <button className="btn btn-neutral mt-4" onClick={()=>signUpGithuble()}>Connect with GitHub <FaGithub className='text-2xl' /></button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sineup;