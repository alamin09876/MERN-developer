import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Service = () => {
    const service = useLoaderData()
    const { picture, price, name, rating, discription } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {price}</p>
                <p>{discription}</p>
                <div className="card-actions justify-end">
                    <Link to ="/addreviews">Add reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;