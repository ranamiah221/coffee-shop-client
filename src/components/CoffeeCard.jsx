import React from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, handleDelete }) => {
    const { _id, name, chef, photoUrl } = coffee;
    
    return (
        <div className='bg-[#F5F4F1]'>
            <div className="flex justify-between items-center gap-2 bg-base-100 shadow-sm p-5">

                <img className='w-20'
                    src={photoUrl}
                    alt="Movie" />

                <div className="text-base font-medium">
                    <p>Name : <span className='text-base font-normal'>{name}</span></p>
                    <p>Chef : <span className='text-base font-normal'>{chef}</span></p>
                    <p>Price : <span className='text-base font-normal'>$10</span></p>
                </div>
                <div className="join join-vertical gap-2 text-2xl">
                    <Link to={`/coffees/${_id}`}><button className="btn join-item bg-amber-500"><IoEye /></button></Link>
                    <Link to={`/update/${_id}`}><button className="btn join-item bg-pink-800"><MdEdit /></button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-500"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;