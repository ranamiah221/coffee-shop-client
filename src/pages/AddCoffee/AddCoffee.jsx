import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Header from "../Home/Header";
import Swal from "sweetalert2";

const AddCoffee = () => {


  const handleAddCoffee=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name=form.name.value;
    const chef=form.chef.value;
    const supplier= form.supplier.value;
    const taste= form.taste.value;
    const category= form.category.value;
    const price= form.price.value;
    const photo= form.photo.value;
    const coffees={name, chef, supplier, taste, category, price, photo}
    fetch('http://localhost:5000/coffees',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(coffees)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            Swal.fire({
                title: "Thank you!",
                text: "Coffee added successfully!",
                icon: "success"
              });
        }
    })
    
  }

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
      <div className="max-w-6xl mx-auto bg-[#F4F3F0] py-10 mt-6">
        <div className="w-3/5 mx-auto text-center mb-5">
          <h1 className="text-4xl font-normal mb-5">
            <i>Add New Coffee</i>
          </h1>
          <p className="">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        {/* form.... */}
        <form onSubmit={handleAddCoffee} class="card-body ">
            {/*name and chef   */}
          <div className=" flex items-center gap-5 px-10">
            <div class="form-control w-1/2">
              <label class="label">
                <span class="label-text">Coffee Name</span>
              </label>
              <input
                type="text"
                placeholder="coffee name"
                name="name"
                class="input input-bordered w-full"
                required
              />
            </div>
            <div class="form-control w-1/2">
              <label class="label">
                <span class="label-text">Chef</span>
              </label>
              <input
                type="text"
                placeholder="chef"
                name="chef"
                class="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* supplier and taste */}
          <div className=" flex items-center gap-5 px-10">
            <div class="form-control w-1/2">
              <label class="label">
                <span class="label-text">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="Supplier"
                name="supplier"
                class="input input-bordered w-full"
                required
              />
            </div>
            <div class="form-control w-1/2">
              <label class="label">
                <span class="label-text">Taste</span>
              </label>
              <input
                type="text"
                placeholder="taste"
                name="taste"
                class="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* category and details */}

          <div className=" flex items-center gap-5 px-10">
            <div class="form-control w-1/2">
              <label class="label">
                <span class="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="category"
                name="category"
                class="input input-bordered w-full"
                required
              />
            </div>
            <div class="form-control w-1/2">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price"
                name="price"
                class="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* photo  */}
          <div className=" flex items-center gap-5 px-10">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photo"
                class="input input-bordered w-full"
                required
              />
            </div>
           
          </div>
          {/* Button */}
           <div className="px-10 mt-5">
           <button type="submit" className=" w-full btn bg-[#D2B48C] border-2 border-black hover:bg-amber-500">Add Coffee </button>
           </div>

        </form>
      </div>
    </div>
    </>
   
  );
};

export default AddCoffee;
{
  /* <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div> */
}
