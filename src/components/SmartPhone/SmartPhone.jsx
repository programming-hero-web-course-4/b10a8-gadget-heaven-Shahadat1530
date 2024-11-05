import React from 'react';

const SmartPhone = ({ smartphone }) => {
    const { product_title, product_image, price } = smartphone;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={product_image}
                    alt={product_title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SmartPhone;