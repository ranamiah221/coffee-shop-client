import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
    }
])

export default Router;