import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const product = data.find(product => product.product_id === product_id);
    const { product_title, product_image, price, description, specification, rating } = product;

    const handleCart = () => {

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const isProductInCart = cart.some(item => item.product_id === product.product_id);
        if (isProductInCart) {
            toast.info('Product is already in the cart!');
        } else {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            toast.success('Added to Cart!');
        }
    };

    const handleWishlist = () => {
        toast.success('Added to Wishlist!');
    }

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
                        <p className="text-2xl font-semibold">Price: ${price}</p>
                        <p>{description}</p>
                        <p className='font-bold'>Specification:</p>
                        <ul>
                            {specification.map((spec, idx) => (
                                <li key={idx}>{spec}</li>
                            ))}
                        </ul>
                        <p>Rating: {rating}</p>
                        <div>
                            <button
                                onClick={handleCart}
                                className="btn bg-[#9538E2] font-bold rounded-3xl text-white"
                            >
                                Add to Cart <FiShoppingCart />
                            </button>
                            <button
                                onClick={handleWishlist}
                                className='btn ml-2 rounded-full bg-slate-50'
                            >
                                <FaRegHeart />
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Details;

