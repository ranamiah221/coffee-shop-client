import React, { useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import SectionTitle from '../../Shared/SectionTitle';
import { Link, useLoaderData } from 'react-router-dom';
import { GiCoffeeCup } from "react-icons/gi";
import Coffee from '../../components/Coffee';
import InstraImage from './InstraImage';

const Home = () => {
    const loadedCoffees= useLoaderData();
    const [coffees, setCoffees]= useState(loadedCoffees)
    return (
        <div>
             <Header></Header>
             <Banner></Banner>
             <About></About>
             <SectionTitle title="Our Popular Products" subTitle='Sip & Savor'></SectionTitle>
             <Link to='/addCoffee'><div className='flex justify-center mt-5'>
             <button className='bg-[#E3B577] p-2 text-white border-black border-2 inline-flex items-center'>Add Coffee <span><GiCoffeeCup /></span> </button></div></Link>
             
             <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
                {
                    coffees.map(coffee=> <Coffee key={coffee._id} coffee={coffee}></Coffee>)
                }
             </div>
            <SectionTitle subTitle='Follow Us Now' title='Follow on Instagram'></SectionTitle>
           <InstraImage></InstraImage>
        </div>
    );
};

export default Home;