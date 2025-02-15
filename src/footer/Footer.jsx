import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-neutral '>
            <div className=' max-w-[1280px] mx-auto'>
                <footer className="footer bg-neutral text-neutral-content p-10">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <h1 className="link link-hover"><Link to='/'>Home</Link></h1>
                        <h1 className="link link-hover"><Link to='/jobs1'>Applie Job</Link></h1>
                        <h1 className="link link-hover"><Link to='/blog1'>Blogs</Link></h1>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;