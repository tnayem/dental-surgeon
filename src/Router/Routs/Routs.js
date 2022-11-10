import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddService from '../../Pages/Add Service/AddService';
import AllServices from '../../Pages/AllServices/AllServices';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import LogIn from '../../Pages/LogIn/LogIn';
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
                loader:()=>fetch('https://dental-surgeon-server-tnayem.vercel.app/doctorServices')
            },
            {
                path:'/services/:id',
                element:<PrivateRouts><ServiceDetails></ServiceDetails></PrivateRouts>,
                loader:({params})=>fetch(`https://dental-surgeon-server-tnayem.vercel.app/doctorServices/${params.id}`)
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