import React from 'react';

import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
const Featured = () => {
    return (
        <div className='w-full bg-[#ECEAE3] flex justify-between items-center gap-5 px-64 py-10'>
            <div className='space-y-2'>
                <img src={icon1} alt="" />
                <h3 className='text-xl font-medium'>Awesome Aroma</h3>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='space-y-2'>
                <img src={icon2} alt="" />
                <h3 className='text-xl font-medium'>High Quality</h3>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='space-y-2'>
                <img src={icon3} alt="" />
                <h3 className='text-xl font-medium'>Pure Grades</h3>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='space-y-2'>
                <img src={icon4} alt="" />
                <h3 className='text-xl font-medium'>Proper Roasting</h3>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
            
        </div>
    );
};

export default Featured;