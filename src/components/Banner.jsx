import React from 'react';
import bannerBg from "../assets/images/more/3.png"
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerBg})` }} className='flex justify-end items-center text-white w-full h-screen bg-cover'>
              <div className='w-1/2 space-y-3 pr-64'>
              <h1 className='font-medium text-4xl'>Would you like a Cup of Delicious Coffee?</h1>
              <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
              <button className='bg-amber-600 text-black text-2xl p-4 hover:text-white hover:border-2 hover:border-white hover:bg-black'>learn more</button>
              </div>
        </div>
    );
};

export default Banner;