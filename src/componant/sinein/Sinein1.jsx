import React from 'react';
import { Link } from 'react-router-dom';

const Sinein1 = () => {
    return (
        <div>
            <form className='h-[100vh] flex justify-center items-center'>
                <div className="card bg-sky-300 w-[600px] h-[400px] shrink-0 shadow-2xl">
                    <div className="card-body">

                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

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

export default Sinein1;