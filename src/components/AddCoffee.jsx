import React from 'react';
import bg from '../assets/images/more/11.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddCoffee = () => {
    const handleAddCoffee=(e)=>{
        e.preventDefault();
        const form=e.target
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier= form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photoUrl = form.photoUrl.value;
        const coffees={
            name,
            chef,
            supplier,
            taste,
            category,
            detail,
            photoUrl
        }
        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(coffees)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "Coffee Added Successfull !",
                    icon: "success",
                    draggable: true
                  });
            }
        })


    }
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='px-64 '>
            <Link to='/'> <button className='my-5 text-xl font-medium inline-flex items-center gap-4'> <FaArrowLeftLong /> Back Home</button></Link>
            <form onSubmit={handleAddCoffee} className='bg-[#F4F3F0] py-8'>
                <div className='w-4/5 mx-auto text-center'>
                    <h1 className='text-2xl font-medium'>Add New Coffee</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className='w-10/12 mx-auto'>
                {/* name and chef */}
                    <div className='flex justify-between items-end gap-5'>
                        <div className='w-full'>
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" name='name' className="input w-full" placeholder="Enter coffee name" />
                        </div>
                        <div className='w-full'>
                            <legend className="fieldset-legend">Chef</legend>
                            <input type="text" name='chef' className="input w-full" placeholder="Enter coffee chef" />
                        </div>
                        
                    </div>
                    {/* supplier and taste */}
                    <div className='flex justify-between items-end gap-5'>
                        <div className='w-full'>
                            <legend className="fieldset-legend">Supplier</legend>
                            <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />
                        </div>
                        <div className='w-full'>
                            <legend className="fieldset-legend">Taste</legend>
                            <input type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />
                        </div>
                        
                    </div>
                    {/* category and detail */}
                    <div className='flex justify-between items-end gap-5'>
                        <div className='w-full'>
                            <legend className="fieldset-legend">Category</legend>
                            <input type="text" name='category' className="input w-full" placeholder="Enter coffee category" />
                        </div>
                        <div className='w-full'>
                            <legend className="fieldset-legend">Details</legend>
                            <input type="text" name='detail' className="input w-full" placeholder="Enter coffee details" />
                        </div> 
                    </div>
                    {/* photoUrl */}
                    <div className='flex justify-between items-end gap-5'>
                        <div className='w-full'>
                            <legend className="fieldset-legend">Photo</legend>
                            <input type="text" name='photoUrl' className="input w-full" placeholder="Enter Photo Url" />
                        </div>
                        
                    </div>
                    <button className='btn btn-block mt-5 bg-[#D2B48C] border-black ' type='submit'>Add New Coffee</button>
                </div>

            </form>

        </div>
    );
};

export default AddCoffee;