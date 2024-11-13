import React, { useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import SectionTitle from "../../Shared/SectionTitle";
import { Link, useLoaderData } from "react-router-dom";
import { GiCoffeeCup } from "react-icons/gi";
import Coffee from "../../components/Coffee";
import InstraImage from "./InstraImage";
import Swal from "sweetalert2";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
            const remaining = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <SectionTitle
        title="Our Popular Products"
        subTitle="Sip & Savor"
      ></SectionTitle>
      <Link to="/addCoffee">
        <div className="flex justify-center mt-5">
          <button className="bg-[#E3B577] p-2 text-white border-black border-2 inline-flex items-center">
            Add Coffee{" "}
            <span>
              <GiCoffeeCup />
            </span>{" "}
          </button>
        </div>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        {coffees.map((coffee) => (
          <Coffee
            key={coffee._id}
            coffee={coffee}
            handleDelete={handleDelete}
          ></Coffee>
        ))}
      </div>
      <SectionTitle
        subTitle="Follow Us Now"
        title="Follow on Instagram"
      ></SectionTitle>
      <InstraImage></InstraImage>
    </div>
  );
};

export default Home;
