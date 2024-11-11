import React from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import SectionTitle from '../../Shared/SectionTitle';
import { Link } from 'react-router-dom';
import { GiCoffeeCup } from "react-icons/gi";

const Home = () => {
    return (
        <div>
             <Header></Header>
             <Banner></Banner>
             <About></About>
             <SectionTitle title="Our Popular Products" subTitle='Sip & Savor'></SectionTitle>
             <Link><div className='flex justify-center mt-5'>
             <button className='bg-[#E3B577] p-2 text-white border-black border-2 inline-flex items-center'>Add Coffee <span><GiCoffeeCup /></span> </button></div></Link>
        </div>
    );
};

export default Home;