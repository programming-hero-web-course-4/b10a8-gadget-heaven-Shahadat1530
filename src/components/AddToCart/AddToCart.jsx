import React from 'react';

const AddToCart = ({ item }) => {
    const { product_title, product_image, price, description } = item;
    return (
        <div className='flex gap-4 border rounded-xl'>
            <div>
                <img src={product_image} alt={product_title} className='w-[100px] rounded-md' />
            </div>
            <div className='p-5 space-y-3'>
                <h4 className="text-2xl font-bold">{product_title}</h4>
                <p className='font-semibold'>{description}</p>
                <p className='font-medium'>${price}</p>
            </div>
        </div>
    );
};

export default AddToCart;