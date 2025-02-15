import React from 'react';
import Navbar from '../../../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../../footer/Footer';

const Root = () => {
    return (
        <div >
            <div className=' max-w-[1280px] mx-auto'>
            <Navbar></Navbar>
            </div>
            <div className=' max-w-[1280px] mx-auto'>
            <Outlet></Outlet>
            </div>
           <div>
           <Footer></Footer>
           </div>
           
        </div>
    );
};

export default Root;