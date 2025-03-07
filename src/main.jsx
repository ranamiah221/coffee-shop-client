import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import HomePage from './components/HomePage.jsx';
import AddCoffee from './components/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
