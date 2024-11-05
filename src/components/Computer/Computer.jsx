import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ComputerCards from '../ComputerCards/ComputerCards';

const Computer = () => {
    const computers = useLoaderData();
    const com = computers.filter((p) => p.category == 'computers')
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                com.map(computer =>
                    <ComputerCards
                        key={computer.product_id}
                        computer={computer}
                    ></ComputerCards>)
            }
        </div>
    );
};

export default Computer;