import React from 'react';
import bgImg from '../assets/images/more/15.jpg'
import img from '../assets/images/more/logo1.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className="flex justify-between items-center px-5 py-4 bg-cover bg-center w-full">
            
            <div className='text-white '>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        <li><Link to='/addCoffee'>Add Coffee</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <img className='h-10' src={img} alt="" />
                <h3 className='text-white font-light text-2xl'>Espresso Emporium</h3>
            </div>
            <div>

            </div>
            




        </div>
    );
};

export default Navbar;