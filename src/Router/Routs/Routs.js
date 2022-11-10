import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddService from '../../Pages/Add Service/AddService';
import AllServices from '../../Pages/AllServices/AllServices';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import LogIn from '../../Pages/LogIn/LogIn';
import MyAllReview from '../../Pages/MyAllReview/MyAllReview';
import MyReview from '../../Pages/MyReview/MyReview';
import Register from '../../Pages/Register/Register';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import PrivateRouts from '../PrivateRouts/PrivateRouts';

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
                element:<PrivateRouts><AllServices></AllServices></PrivateRouts>,
                loader:()=>fetch('http://localhost:5000/doctorServices')
            },
            {
                path:'/services/:id',
                element:<PrivateRouts><ServiceDetails></ServiceDetails></PrivateRouts>,
                loader:({params})=>fetch(`http://localhost:5000/doctorServices/${params.id}`)
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/myreview',
                element:<PrivateRouts><MyReview></MyReview></PrivateRouts>
            },
            {
                path:'/addservice',
                element:<PrivateRouts><AddService></AddService></PrivateRouts>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])
export default router;