import React from 'react';
import logo from '../../assets/coffee/more/logo1.png'

const Header = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/JjZnH4N/15.jpg')] md:h-14 text-[#FFF]">
                <div className='lg:w-1/5 w-4/5 mx-auto flex items-center gap-3 '>
                    <img className='w-10 ' src={logo} alt="" />
                    <h2 className='text-2xl font-extralight'><i>Espresso Emporium</i></h2>
                </div>
        </div>
    );
};

export default Header;