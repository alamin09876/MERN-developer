import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../Pages/Home/Home';
import AddReviews from '../Pages/Home/Services/AddReviews';

import Service from '../Pages/Home/Services/Service';
import Services from '../Pages/Home/Services/Services';

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
                path : '/addreviews',
                element :<AddReviews></AddReviews>
            },
           
            { path: '*', element: <div>This route is not found</div> }
        ]
    }
])