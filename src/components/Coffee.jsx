import { FaEye, FaPenFancy } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
const Coffee = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, price, photo } = coffee;
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl w-full border border-black">
        <div className="w-2/5">
        <img src={photo} alt="Movie" className="" />
        </div>
       
      
      <div className="flex items-center justify-between w-3/5">
        <div className="space-y-3">
          <p className="text-sm font-medium">Name : <span className="text-sm font-thin">{name}</span> </p>
          <p className="text-sm font-medium">Chef : <span className="text-sm font-thin">{chef}</span> </p>
          <p className="text-sm font-medium">Price :<span className="text-sm font-thin">{price}</span></p>
        </div>
        <div className="mr-5 space-y-3">
            <Link to={`/coffees/${_id}`}><p className="text-xl text-white  font-bold w-10 p-2 rounded-lg bg-green-500"><FaEye></FaEye></p></Link>
            <p className="text-xl text-white font-bold w-10 p-2 rounded-lg bg-[#3C393B]"><FaPenFancy /></p>
            <p className="text-xl text-white font-bold w-10 p-2 rounded-lg bg-red-500"><MdDeleteForever /></p>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
