import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewProduct from '../NewProduct/NewProduct';

const Upcoming = () => {
    const upcomingProducts = useLoaderData();

    return (
        <div className='bg-slate-100'>
            <div className='max-w-screen-2xl mx-auto space-y-5 p-5'>
                <h3 className="text-4xl font-bold text-center">Upcoming Products</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        upcomingProducts?.map(newProduct =>
                            <NewProduct
                                key={newProduct.product_id}
                                newProduct={newProduct}
                            ></NewProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Upcoming;