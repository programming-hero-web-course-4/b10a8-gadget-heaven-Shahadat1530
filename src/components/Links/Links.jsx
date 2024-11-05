import React from 'react';
import { NavLink } from 'react-router-dom';
import './Links.css'

const Links = () => {
    return (
        <nav className='flex flex-col gap-3'>
            <NavLink to='/'>All Product</NavLink>
            <NavLink to='/computer'>Computers</NavLink>
            <NavLink >Smartphones</NavLink>
            <NavLink >Laptops</NavLink>
        </nav>
    );
};

export default Links;