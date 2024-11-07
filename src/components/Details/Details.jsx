import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const product = data.find( product => product.product_id === product_id);
    const {} = product;
    return (
        <div>
            <h3 className="3xl">Details:{product_id}</h3>
        </div>
    );
};

export default Details;