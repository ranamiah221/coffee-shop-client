import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id}=coffee;

    const handleUpdateCoffee=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier= form.supplier.value;
        const taste= form.taste.value;
        const category= form.category.value;
        const price= form.price.value;
        const photo= form.photo.value;
        const updateCoffee={name, chef, supplier, taste, category, price, photo}
        console.log("updateCoffee", updateCoffee);
        fetch(`http://localhost:5000/coffees/${_id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: "Updated!",
                    text: "Coffee Update successfully!",
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
      <div className="max-w-6xl mx-auto bg-[#90ac3994] py-10 mt-6 rounded-lg">
        <div className="w-3/5 mx-auto text-center mb-5">
          <h1 className="text-4xl font-normal mb-5">
            <i>Update Coffee</i>
          </h1>
          <p className="">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        {/* form.... */}
        <form onSubmit={handleUpdateCoffee} class="card-body ">
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
                defaultValue={coffee.name}
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
                defaultValue={coffee.chef}
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
                defaultValue={coffee.supplier}
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
                defaultValue={coffee.taste}
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
                defaultValue={coffee.category}
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
                defaultValue={coffee.price}
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
                defaultValue={coffee.photo}
                class="input input-bordered w-full"
                readOnly
                required
              />
            </div>
           
          </div>
          {/* Button */}
           <div className="px-10 mt-5">
           <button type="submit" className=" w-full btn bg-[#23847c] text-white border-2 border-black hover:bg-amber-500">Update Coffee </button>
           </div>

        </form>
      </div>
    </div>
    </>
    );
};

export default UpdateCoffee;