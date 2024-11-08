import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddToCart from '../AddToCart/AddToCart';

const Dashboard = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []);

    const handleRemoveAll = () => {
        localStorage.removeItem("cart");
        setCartItems([]);
        toast.success('All items removed from the cart!');
    };
    return (
        <div>
            <div className='bg-[#9538E2]'>
                <div className='max-w-screen-2xl mx-auto text-center text-white'>
                    <h3 className="text-4xl font-bold">Dashboard</h3>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
                    <div className='space-x-3'>
                        <button className='btn rounded-2xl'>Cart</button>
                        <button className='btn rounded-2xl'>WishList</button>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-2xl mx-auto'>
                <div className='flex justify-between'>
                    <h5 className='text-3xl font-semibold'>Cart</h5>
                    <button onClick={handleRemoveAll} className='btn'>Purchased</button>
                    <ToastContainer></ToastContainer>
                </div>
                <div className='space-y-5'>
                    {
                        cartItems.map(item => <AddToCart key={item.product_id} item={item}></AddToCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;