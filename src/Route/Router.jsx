import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/coffees')
    },
    {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
    },
    {
        path:'/coffees/:id',
        element:<CoffeeDetails></CoffeeDetails>,
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
    },
    {
        path:'/update/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`) 
    },


])

export default Router;