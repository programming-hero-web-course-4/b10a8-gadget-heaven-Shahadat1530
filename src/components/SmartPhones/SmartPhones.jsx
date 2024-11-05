import React from 'react';
import SmartPhone from '../SmartPhone/SmartPhone';
import { useLoaderData } from 'react-router-dom';

const SmartPhones = () => {
    const smartphones = useLoaderData();
    const smartphn = smartphones.filter((p) => p.category == 'smartphones')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                smartphn.map(smartphone =>
                    <SmartPhone
                        key={smartphone.product_id}
                        smartphone={smartphone}
                    ></SmartPhone>)
            }
        </div>
    );
};

export default SmartPhones;