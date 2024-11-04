import React from 'react';
import Banner from '../Banner/Banner';
import AllProduct from '../AllProduct/AllProduct';

const Home = () => {
    return (
        <>
            <div className=' max-w-screen-2xl mx-auto'>
                <div className='bg-[#9538E2] text-white text-center space-y-10 p-16 pb-40 rounded-2xl'>
                    <h1 className="text-6xl">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <div>
                        <button
                            className='btn bg-white rounded-full 
                        font-semibold text-[#9538E2]'
                        >Shop Now</button>
                    </div>
                </div>
                <Banner></Banner>
                <AllProduct></AllProduct>
            </div>
        </>
    );
};

export default Home;