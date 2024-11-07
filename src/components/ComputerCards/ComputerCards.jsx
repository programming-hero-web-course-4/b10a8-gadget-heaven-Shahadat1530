import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComputerCards = ({computer}) => {
    const {product_id, product_title, product_image, price } = computer;
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/product/${product_id}`)
    }
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
                    <button onClick={handleDetails} className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ComputerCards;