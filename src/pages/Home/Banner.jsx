import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/4SDPVrh/3.png')] h-screen bg-no-repeat flex justify-end items-center p-5 md:p-0">
             <div className='text-[#FFF] md:w-3/5 space-y-5'>
                    <h1 className='text-4xl font-extralight'><i>Would you like a Cup of Delicious Coffee?</i></h1>
                    <p className=''>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! 
                        Enjoy the beautiful moments and make them memorable.</p>
                    <button className='bg-[#E3B577] text-black p-2 rounded-lg'>Learn More</button>
                    
             </div>
        </div>
    );
};

export default Banner;