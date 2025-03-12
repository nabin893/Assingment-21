import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlus } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { getAuth,} from "firebase/auth";
import app from '../Firebase/Firebase.config';



const auth = getAuth(app);





const Sineup = () => {

    const handelCaUser=(e)=>{
        event.preventDefault()
        console.log(event.target.firstName.value );
        
    }
    return (
        <div>
            <div>
                <form onSubmit={handelCaUser} className='h-[100vh] flex justify-center items-center'>
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

                          <button className="btn btn-neutral mt-4">SignUp</button>
                          <div className='flex justify-between'>
                        <button className="btn btn-neutral mt-4">Continue with Google <FaGooglePlus className='text-2xl' /></button>
                        <button className="btn btn-neutral mt-4">Connect with GitHub <FaGithub  className='text-2xl' /></button>
                        </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sineup;