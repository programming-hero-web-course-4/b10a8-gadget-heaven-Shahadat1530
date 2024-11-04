import React from 'react';

const Footer = () => {
    return (
        <footer className="p-10 max-w-screen-xl mx-auto">
            <div className='space-y-3 mb-5'>
                <h4 className="text-3xl font-bold text-center">Gadget Heaven</h4>
                <p className='font-medium text-center'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='divider'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <div className='flex flex-col'>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <div className='flex flex-col'>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <div className='flex flex-col'>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;