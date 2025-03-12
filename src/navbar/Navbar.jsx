import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='bg-sky-300 rounded-xl mt-5'>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><NavLink to='/'>HOME</NavLink></li>
                                <li><NavLink to='/jobs1'>APPLIE JOB</NavLink></li>
                                <li><NavLink to='/blog1'>BLOGS</NavLink></li>

                            </ul>
                        </div >
                        <div className='ml-5 p-2'>
                        <img className='w-36' src="https://i.ibb.co.com/FLgDn31r/logo1.png" alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>HOME</NavLink></li>
                                <li><NavLink to='/jobs1'>APPLIE JOB</NavLink></li>
                                <li><NavLink to='/blog1'>BLOGS</NavLink></li>

                        </ul>
                    </div>
                    <div className="navbar-end mr-5">
                        <button className=' bg-slate-700 p-2 rounded-xl text-white'><Link to="/sineIn">SING IN</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;