import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../assets/images/more/11.png'

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { name, chef, supplier, taste, category, detail, photoUrl } = coffee;
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='px-64 '>
            <Link to='/'> <button className='my-5 text-xl font-medium inline-flex items-center gap-4'> <FaArrowLeftLong /> Back Home</button></Link>

            <div className="card lg:card-side bg-base-100 shadow-sm p-8 flex justify-evenly items-center my-5">
                
                    <img className=''
                        src={photoUrl}
                        alt="Album" />
               
                <div className="space-y-1.5">
                    <h2 className="text-xl font-bold">Niceties</h2>
                    <p className='text-base font-medium'>Name : <span className='text-base font-normal'>{name}</span></p>
                    <p className='text-base font-medium'>Chef : <span className='text-base font-normal'>{chef}</span></p>
                    <p className='text-base font-medium'>Supplier : <span className='text-base font-normal'>{supplier}</span></p>
                    <p className='text-base font-medium'>Taste : <span className='text-base font-normal'>{taste}</span></p>
                    <p className='text-base font-medium'>Category : <span className='text-base font-normal'>{category}</span></p>
                    <p className='text-base font-medium'>Details : <span className='text-base font-normal'>{detail}</span></p>
                    
                </div>
            </div>


        </div>
    );
};

export default CoffeeDetails;