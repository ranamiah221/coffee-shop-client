import React from "react";
import 'animate.css';
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Home/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, price, photo } = coffee;
  return (
    <>
      <Header></Header>
      <div className="bg-[url('https://i.ibb.co.com/Ksd4sYD/1.png')] w-full h-screen font-Rancho">
        <div className="max-w-6xl mx-auto pt-5">
          <Link to="/">
            <div className="text-base font-medium text-black inline-flex items-center gap-2">
              <FaArrowLeftLong />
              <i>Go Back Home</i>
            </div>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto bg-[#F4F3F0] py-10 mt-6 lg:flex items-center">
          
            <div className="lg:w-1/2">
            <img
                src={photo}
                alt="Album"
                className=" lg:w-72 lg:h-72"
              />
                </div>  
          
            <div className="lg:w-1/2 space-y-3 animate__animated animate__backInDown">
              <h2 className="text-2xl font-semibold"><i>Niceties</i></h2>
              <p className="text-sm font-medium">Name : <span className="text-sm font-thin">{name}</span> </p>
              <p className="text-sm font-medium">Chef : <span className="text-sm font-thin">{chef}</span> </p>
              <p className="text-sm font-medium">Supplier : <span className="text-sm font-thin">{supplier}</span> </p>
              <p className="text-sm font-medium">Category : <span className="text-sm font-thin">{category}</span> </p>
              <p className="text-sm font-medium">Taste : <span className="text-sm font-thin">{taste}</span> </p>


            </div>
          </div>
        </div>
      
    </>
  );
};

export default CoffeeDetails;
