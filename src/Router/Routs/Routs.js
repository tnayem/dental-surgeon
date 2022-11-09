import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AllServices from '../../Pages/AllServices/AllServices';
import Home from '../../Pages/Home/Home/Home';
import LogIn from '../../Pages/LogIn/LogIn';
import Register from '../../Pages/Register/Register';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/service',
                element:<AllServices></AllServices>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;