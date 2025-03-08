import SectionHeader from "./SectionHeader";
import bgImage from '../assets/images/more/1.png'
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import Swal from "sweetalert2";

const Coffees = () => {
    const [coffees, setCoffees]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/coffees',{
            method:'GET'
        })
        .then(res=> res.json())
        .then(data=>{
            setCoffees(data)
        })
    },[])
    const handleDelete = (_id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to delete this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/coffees/${_id}`,{
                        method:'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your coffee has been deleted.",
                                    icon: "success"
                                  });  
                                  const remaining = coffees.filter(coffee => coffee._id !== _id)
                                  setCoffees(remaining)
                            }    
                        })
    
    
                }
            });
        }
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="py-5 px-64">
            <SectionHeader header={'Our Popular Products'} subHeader={'Sip & Savor'}></SectionHeader>
            <div className="grid grid-cols-2 gap-5 my-8">
            {
            coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete}></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Coffees;