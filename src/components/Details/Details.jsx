import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const Details = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const product = data.find(product => product.product_id === product_id);
    const { product_title, product_image, price, description, specification, availability, rating } = product;
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='bg-[#9538E2] text-white text-center p-5 pb-20'>
                <h3 className="text-3xl font-bold">Product Details</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-base-200 p-5 rounded-xl w-2/3 translate-x-56 -translate-y-10">
                <div className="flex flex-col lg:flex-row gap-5">
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-5'>
                        <h1 className="text-3xl font-bold">{product_title}</h1>
                        <p className="text-2xl font-semibold">Price:${price}</p>
                        <p>{description}</p>
                        <p className='font-bold'>Specification:</p>
                        <div>
                            {
                                specification.map((spec, idx) => <li key={idx}>{spec}</li>)
                            }
                        </div>
                        <p>Rating: {rating}</p>
                        <div>
                            <button className="btn bg-[#9538E2] font-bold rounded-3xl text-white">Add to Cart<FiShoppingCart></FiShoppingCart></button>
                            <button className='btn ml-2 rounded-full bg-slate-50'><FaRegHeart></FaRegHeart></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;