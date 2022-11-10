import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import ServiceCard from '../../Home/Services/ServiceCard';


const COurses = () => {
    
    const [services, setServices] = useState([]);
    const serv = services;
    
    useEffect( () =>{
        fetch('https://mern-developer-server.vercel.app/courses')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center my-6'>
                
                <h2 className="text-5xl font-semibold mb-10">My Course Offerings</h2>
                
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
                {
                    serv.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default COurses;