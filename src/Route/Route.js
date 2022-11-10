import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Blogs from '../Pages/blogs/Blogs/Blogs';
import Home from '../Pages/Home/Home';
import AddService from '../Pages/Home/Services/AddService';


import Service from '../Pages/Home/Services/Service';
import Services from '../Pages/Home/Services/Services';
import Login from '../Pages/Login/Login/Login';
import Registration from '../Pages/Login/Registration/Registration';
import MyReviews from '../Pages/MyReviews/MyReviews';
import Update from '../Pages/MyReviews/Update';
import PrivateRoute from './PrivateRoute';

export const route = createBrowserRouter([
    {
        path:'/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/services',
                element : <Services></Services>
            },
            {
                path : '/services',
                element : <Services></Services>
            },
            {
                path : '/service/:id',
                element : <PrivateRoute><Service></Service></PrivateRoute>,
                loader : ({params}) => fetch (`https://mern-developer-server.vercel.app/services/${params.id}`)
            },
            {
                path :'/login',
                element :<Login></Login>
            },
            {
                path :'/blogs',
                element :<Blogs></Blogs>
            },
            {
                path : '/registration',
                element: <Registration></Registration>
            },
            {
                path : '/addservice',
                element : <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/myreviews',
                element : <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                
            },
            {
                path : '/update/:id',
                element : <PrivateRoute><Update></Update></PrivateRoute>,
                loader : ({params}) => fetch (`https://mern-developer-server.vercel.app/reviews/${params.id}`)
            },
           
            { path: '*', element: <div>This route is not found</div> }
        ]
    }
])