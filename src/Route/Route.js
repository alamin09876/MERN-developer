import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../Pages/Home/Home';
import AddService from '../Pages/Home/Services/AddService';


import Service from '../Pages/Home/Services/Service';
import Services from '../Pages/Home/Services/Services';
import Login from '../Pages/Login/Login/Login';
import Registration from '../Pages/Login/Registration/Registration';

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
                path : '/service/:id',
                element : <Service></Service>,
                loader : ({params}) => fetch (`http://localhost:5000/services/${params.id}`)
            },
            {
                path :'/login',
                element :<Login></Login>
            },
            {
                path : '/registration',
                element: <Registration></Registration>
            },
            {
                path : '/addservice',
                element : <AddService></AddService>
            },
           
            { path: '*', element: <div>This route is not found</div> }
        ]
    }
])