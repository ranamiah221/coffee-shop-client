import React from 'react';
import bgImg from '../assets/images/more/15.jpg'
import img from '../assets/images/more/logo1.png'
const Navbar = () => {
    return (
        <div  style={{ backgroundImage: `url(${bgImg})` }} className="flex justify-center items-center gap-3 py-4 bg-cover bg-center w-full">
             <img className='h-10' src={img} alt="" />
             <h3 className='text-white font-light text-2xl'>Espresso Emporium</h3>
        </div>
    );
};

export default Navbar;