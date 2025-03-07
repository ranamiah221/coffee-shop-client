import SectionHeader from "./SectionHeader";
import bgImage from '../assets/images/more/1.png'
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";

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
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="py-5 px-64">
            <SectionHeader header={'Our Popular Products'} subHeader={'Sip & Savor'}></SectionHeader>
            <div>
            {
                coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Coffees;