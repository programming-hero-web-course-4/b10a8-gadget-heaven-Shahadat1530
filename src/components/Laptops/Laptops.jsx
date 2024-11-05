import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Laptop from '../Laptop/Laptop';

const Laptops = () => {
    const laptops = useLoaderData();
    const laptopes = laptops.filter((p) => p.category == 'laptops')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                laptopes.map(laptop =>
                    <Laptop
                        key={laptop.product_id}
                        laptop={laptop}
                    ></Laptop>)
            }
        </div>
    );
};

export default Laptops;